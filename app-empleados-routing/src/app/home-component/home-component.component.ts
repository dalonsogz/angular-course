import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{
  titulo = 'Listado de Empleados';

  constructor(private empleadosService:EmpleadosService) {
//    this.empleados=this.empleadosService.empleados;
  }

  empleados:Empleado[]=[];

  ngOnInit(): void {
    this.empleadosService.obetenerEmpleados().subscribe(misEmpleados=>{

      console.log("HomeComponentComponent:ngOnInit():" + misEmpleados);

      if (misEmpleados!=null) {
        this.empleados=Object.values(misEmpleados);
        this.empleadosService.setEmpleados(this.empleados);
      }
    });
  }

  agregarEmpleado() {
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

}
