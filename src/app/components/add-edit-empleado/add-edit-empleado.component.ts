import { Component } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatSelect } from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio';
import { JsonPipe } from '@angular/common';
import { RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-empleado',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelect,
    MatOption,
    MatRadioModule,
    RouterLink,
    ReactiveFormsModule,
    JsonPipe
],
  templateUrl: './add-edit-empleado.component.html',
  styleUrl: './add-edit-empleado.component.css'
})
export class AddEditEmpleadoComponent {
  estadosCiviles: any[] = ['Soltero', 'Casado', 'Divorciado'];

  myForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      nombres: [''] ,
      correo: [''] ,
      fechaIngreso: [''] ,
      telefono: [''] ,
      estadoCivil: [''] ,
      sexo: [''] 
    });
  }


}
