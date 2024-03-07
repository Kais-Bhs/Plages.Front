import { Parasole } from '../../Models/parasole.model';
import { CommonModule } from '@angular/common';
import { File } from '../../Models/file.model';
import { ReservationParasole } from '../../Models/reservation-parasole.model';
import { Reservation } from '../../Models/reservation.model';
import { Statut } from '../../Models/statut';
import { Facture } from '../../Models/facture.model';
import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ParasoleDialogComponent } from '../../parasole-dialog/parasole-dialog.component';
import { User } from '../../Models/user.model';
import { Concession } from '../../Models/Concession';
import { TypeEquipement } from '../../Models/type-equipement';
 
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  selectedItem: string = 'clients';
  files: File[] = [];
  parasols: Parasole[] = [];
  reservations: Reservation[] = [];
  dateReservation: FormControl = new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'));
  selectedReservation!: Reservation;
  constructor(private dialog: MatDialog){}
 
 
  ngOnInit(): void {
 
    // Generate a random number between 0 and 1
    const random = Math.floor(Math.random() * 2);
 
    // Use the random number to select the statut value
    const statut = random === 0 ? Statut.CONFIRMED : Statut.NONCONFIRMED;
 
    for (let j = 0; j < 8; j++) {
      this.files[j] = { id: j + 1, numero: j + 1, prixJournalier: j + 10, concession: new Concession(), parasoles: [] }; // Initialize this.files[j] as an object with a parasoles property
      for (let i = 0; i < 36; i++) {
        const parasol = new Parasole(
          i + 1, // id
          i + 1, // numEmplacement
          'statut', // statut
          [], // equipements (empty array)
          new File(), // file
          [] // reservationParasoles (empty array)
        );
        this.files[j].parasoles?.push(parasol);
      }
    }
 
      //for (let i = 0; i < 36; i++) {
      // Generate a random number between 0 and 1
     // const random = Math.floor(Math.random() * 2);
 
      // Use the random number to select the statut value
     // const statut = random === 0 ? Statut.CONFIRMED : Statut.NONCONFIRMED;
     // const reservationParasole = new ReservationParasole(
      //  i + 1, // id
      //  i + 1, // nbLit
       // i + 1, // nbFauteuil
       // new Reservation(i + 1, '2024-03-05', '2024-03-09',  this.files[1].parasoles[i],"none",TypeEquipement.DEUXLITS, new User('Pierre', 'Montblanc','pm@gmail.com'), statut, new Facture()), // reservation
      //  this.files[1].parasoles[i] // parasole
      //);
      //this.reservationParasols.push(reservationParasole);
   // }
  }
 
 
  selectItem(item: string): void {
    this.selectedItem = item;
  }
 
  isConfirmed(parasol: Parasole): boolean {
    if (this.dateReservation.value?.length > 0) {
      return this.reservations.some(reservationP => 
        reservationP.parasole?.id === parasol.id &&
        reservationP.statut === Statut.CONFIRMED &&
        reservationP.dateDebut !== undefined &&
        reservationP.dateFin !== undefined &&
        this.dateReservation.value >= reservationP.dateDebut &&
        this.dateReservation.value <= reservationP.dateFin
      );
    }
    return false;
  }
  
 
  getUserForParasolAndDate(parasol: Parasole): Reservation | undefined {
    if (this.dateReservation.value?.length > 0) {
      return this.reservations.find(reservationP =>
        reservationP.parasole?.id === parasol.id &&
        reservationP.statut === Statut.CONFIRMED &&
        reservationP.dateDebut !== undefined &&
        reservationP.dateFin !== undefined &&
        this.dateReservation.value >= reservationP.dateDebut &&
        this.dateReservation.value <= reservationP.dateFin);
    }
    return undefined;
}
 
  openDialog(file: File, parasol: Parasole): void {
    let isConfirmed = this.isConfirmed(parasol);
 
    let user = this.getUserForParasolAndDate(parasol)?.user;
    let reservation = this.getUserForParasolAndDate(parasol);
 
    const dialogRef = this.dialog.open(ParasoleDialogComponent, {
      width: '50%',
      data: { file, parasol, isConfirmed, user, reservation }
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
 
}