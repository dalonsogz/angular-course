import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService {

    constructor(private servicioVentanaEmergente:ServicioEmpleadosService){
        
    }

    empleados:Empleado[]=[
        new Empleado("Juan","Díaz","Presidente",7500),
        new Empleado("Anna","Martín","Directora",5500),
        new Empleado("María","Fernández","Jefa Sección",3500),
        new Empleado("Laura","López","Administrativo",2500)
      ];


    agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar:" + "\n" + empleado.nombre + "\n" + "Salario:" + empleado.salario);
        this.empleados.push(empleado);
    }

}