import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute, private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService) { }

  empleados:Empleado[]=[];

  accion:number;

  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);
    this.empleados=this.empleadosService.empleados;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome() {
    this.router.navigate(['']);
  }
/*
  actualizaEmpleado() {
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
    this.router.navigate(['']);
  }

  eliminaEmpleado() {
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
  }
*/

/*9
actualizaEmpleado() {
  if (this.accion==1) {
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleadosService.actualizarEmpleado(this.indice,miEmpleado);
  } else {
    this.empleadosService.eliminarEmpleado(this.indice);
  }
  this.router.navigate(['']);
}
*/

async actualizaEmpleado() {
  if (this.accion == 1) {
    let miniEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    await this.empleadosService.actualizarEmpleado(this.indice, miniEmpleado);
    await this.router.navigate(['']);
  } else if (this.accion == 2) {
    await this.empleadosService.eliminarEmpleado(this.indice);
    await this.router.navigate(['']);
  }
  
  // espera a que se completen las operaciones antes de recargar la página
  await new Promise(resolve => setTimeout(resolve, 1000));
  location.reload();
}

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  indice:number=0;


}
