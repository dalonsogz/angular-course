import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit{

  @Input() empleadoDeLista:Empleado;

  @Input() indice:number;

  constructor() {}

  ngOnInit() {

  }

  empleados:Empleado[]=[
    new Empleado("Juan","Díaz","Presidente",7500),
    new Empleado("Anna","Martín","Directora",5500),
    new Empleado("María","Fernández","Jefa Sección",3500),
    new Empleado("Laura","López","Administrativo",2500)
  ];

  agregarEmpleado(miEmpleado:Empleado) {
//    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

  arrayCaracteristicas = [''];

  agregarCarracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }


}
