import { Component } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatSelect } from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio';
import { JsonPipe, CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Empleado } from '../../models/empleado.entity';
import { EmpleadoService } from '../../services/empleado.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    JsonPipe,
    CommonModule
],
  templateUrl: './add-edit-empleado.component.html',
  styleUrl: './add-edit-empleado.component.css'
})
export class AddEditEmpleadoComponent {
  estadosCiviles: any[] = ['Soltero', 'Casado', 'Divorciado'];

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private route: Router,
    private snackbar: MatSnackBar
  ){
    this.myForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.maxLength(20)]] ,
      correo: ['', [Validators.required, Validators.email]] ,
      fechaIngreso: ['', Validators.required] ,
      telefono: ['', Validators.required] ,
      estadoCivil: ['', Validators.required] ,
      sexo: ['', Validators.required] 
    });
  }

  guardarEmpleado() {
    console.log(this.myForm);
    const empleado: Empleado = {
      nombres: this.myForm.get('nombres')?.value,
      correo: this.myForm.get('correo')?.value,
      fechaIngreso: this.myForm.get('fechaIngreso')?.value,
      telefono: this.myForm.get('telefono')?.value,
      estadoCivil: this.myForm.get('estadoCivil')?.value,
      sexo: this.myForm.get('sexo')?.value
    };
    this.empleadoService.agregarEmpleado(empleado);
    this.snackbar.open('Empleado regsitrado con exito', '',
          {duration:   30000}
        );
    this.route.navigate(['/']);
  }
}