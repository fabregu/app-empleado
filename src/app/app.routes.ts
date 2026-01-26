import { Routes } from '@angular/router';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';

export const routes: Routes = [
    { path: '', component: ListEmpleadoComponent },
    { path: 'add', component: AddEditEmpleadoComponent },
    { path: 'edit/:id', component: AddEditEmpleadoComponent },
    { path: '**', component: ListEmpleadoComponent },
];
