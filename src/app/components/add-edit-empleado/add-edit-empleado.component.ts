import { Component } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatSelect } from "@angular/material/select";

@Component({
  selector: 'app-add-edit-empleado',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelect,
    MatOption
],
  templateUrl: './add-edit-empleado.component.html',
  styleUrl: './add-edit-empleado.component.css'
})
export class AddEditEmpleadoComponent {
  estadosCiviles: any[] = ['Soltero', 'Casado', 'Divorciado']
}
