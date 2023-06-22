import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  empleados:Empleado[]=[];
  
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  constructor(private router:Router, private empleadosService:EmpleadosService) { }

  ngOnInit(): void {
    this.empleadosService.obetenerEmpleados().subscribe(misEmpleados=>{

      console.log("ProyectosComponentComponent:ngOnInit():" + misEmpleados);

      if (misEmpleados!=null) {
        this.empleados=Object.values(misEmpleados);
        this.empleadosService.setEmpleados(this.empleados);
      }
    });
  }

  volverHome() {
    this.router.navigate(['']);
  }

  agregarEmpleado() {
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']);
  }

}
