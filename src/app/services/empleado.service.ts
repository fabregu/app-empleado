import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.entity';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {
    nombres: 'Lucas Locasa',
    telefono: 987654345,
    correo: 'micorreo@gmail.com',
    sexo: 'Masculino',
    fechaIngreso: new Date(),
    estadoCivil: 'Soltero'
    },
    {
    nombres: 'Angie Locasa 2',
    telefono: 984554345,
    correo: 'micorreo2@gmail.com',
    sexo: 'Femenino',
    fechaIngreso: new Date(),
    estadoCivil: 'Soltera'
    }
  ];
  constructor() { }

  getEmpleados() {
    return this.listEmpleado.slice();
  }

  agregarEmpleado(empleado: Empleado) {
    this.listEmpleado.unshift(empleado)
  }

  getEmpleado(index: number) {
    return this.listEmpleado[index];
  }

  editarEmpleado(empleado: Empleado, idEmpleado: number) {
    this.listEmpleado[idEmpleado].nombres = empleado.nombres,
    this.listEmpleado[idEmpleado].correo = empleado.correo,
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso,
    this.listEmpleado[idEmpleado].telefono = empleado.telefono,
    this.listEmpleado[idEmpleado].sexo = empleado.sexo,
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil
  }

  delete(index: number) {
    this.listEmpleado.splice(index, 1)
  }
}
