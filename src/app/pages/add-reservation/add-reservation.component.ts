import { Component } from '@angular/core';
import { Reservation } from '../../Models/reservation.model';
import { ParasoleService } from '../../_services/parasole.service';
import { Parasole } from '../../Models/parasole.model';
import { Observable, empty } from 'rxjs';
import { ReservationService } from '../../_services/reservation.service';
import { FileService } from '../../_services/file.service';
import { File } from '../../Models/file.model';
import { User } from '../../Models/user.model';
import { StorageService } from '../../_services/storage.service';
import { Statut } from '../../Models/statut';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  reservation: Reservation = new Reservation();
  // Liste des parasols
  selectedFile: number | null = null;
  parasoles: Parasole[] = [];
  files$: Observable<File[]>;
  errorMessage = '';

  constructor(private parasolService: ParasoleService, private reservationService: ReservationService, private fileService: FileService,private storageService : StorageService) {
    this.files$ = this.fileService.getFiles();
  }

  onFileSelected(): void {
    if (this.selectedFile) {
      this.parasolService.getParasoleByFileId(this.selectedFile).subscribe(parasoles => {
        this.parasoles = parasoles;
      });
    } else {
      this.parasoles = [];
    }
  }



  onSubmit(): void {
    this.reservation.user = this.storageService.getUser();
    this.reservation.statut = Statut.NONCONFIRMED ;
    console.log(this.reservation);
    this.reservationService.createReservation(this.reservation).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }
}
