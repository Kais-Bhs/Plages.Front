import { Component, Inject } from '@angular/core';
import { Parasole } from '../Models/parasole.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { File } from '../Models/file.model';
import { ParasoleService } from '../_services/parasole.service';

@Component({
  selector: 'app-add-reservation-parasole-dialog-component',
  templateUrl: './add-reservation-parasole-dialog-component.component.html',
  styleUrl: './add-reservation-parasole-dialog-component.component.css'
})
export class AddReservationParasoleDialogComponentComponent {
  selectedParasole: Parasole | null = null;
  selectedEquipement: string | null = null;
  selectedFile: number | null = null;
  parasoles: Parasole[] = [];

  constructor(private parasolService: ParasoleService,
    public dialogRef: MatDialogRef<AddReservationParasoleDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { files :File[] }
  ) { }

  onReserve(): void {
    if (this.selectedParasole && this.selectedEquipement) {
      this.dialogRef.close({ parasoleId: this.selectedParasole.id, equipement: this.selectedEquipement });
    }
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
  onCancel(): void {
    this.dialogRef.close();
  }
}
