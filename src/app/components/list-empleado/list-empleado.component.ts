import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator'
import { MatSort, MatSortHeader } from "@angular/material/sort";
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado.entity';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import {MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-empleado',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    MatPaginatorModule,
    MatSort,
    MatSortHeader,
    DatePipe,
    MatIcon,
    RouterModule
],
  templateUrl: './list-empleado.component.html',
  styleUrl: './list-empleado.component.css'
})
export class ListEmpleadoComponent {
  displayedColumns: string[] = ['nombres', 'telefono', 'correo', 'estadoCivil', 'fechaIngreso', 'sexo', 'actions'];
  dataSource = new MatTableDataSource();
  listEmpleado: Empleado[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _empleadoService: EmpleadoService, public dialog: MatDialog, public snackbar: MatSnackBar) {}

  ngAfterViewInit() {
    this.obtenerEmpleados();    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerEmpleados() {
    this.listEmpleado = this._empleadoService.getEmpleados();
    this.dataSource.data = this.listEmpleado;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eliminar(index: number) {

    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {mensaje: 'Está seguro de eliminar el registro?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === "aceptar") {
        this._empleadoService.delete(index);
        this.obtenerEmpleados();
        this.snackbar.open('Empleado eliminado con exito', '',
          {duration:   30000}
        );
      }
    })
  }
}
