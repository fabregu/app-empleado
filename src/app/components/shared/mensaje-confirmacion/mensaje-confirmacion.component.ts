import { Component, Inject } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-mensaje-confirmacion',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, MatButton, MatDialogClose],
  templateUrl: './mensaje-confirmacion.component.html',
  styleUrl: './mensaje-confirmacion.component.css'
})
export class MensajeConfirmacionComponent {
  mensaje: string = '';
  btn = "aceptar";
  constructor(
    public dialogRef: MatDialogRef<MensajeConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.mensaje = data.mensaje;
    }
  onNoClick() {
    this.dialogRef.close();
  }
}
