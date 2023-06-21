import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

export let browserRefresh=false;

@Injectable()
export class EmpleadosService {

    constructor(private servicioVentanaEmergente:ServicioEmpleadosService, private dataService:DataServices){

    }
    

    setEmpleados(misEmpleados:Empleado[]) {
        this.empleados = misEmpleados;
    }

    empleados:Empleado[]=[];

//    empleados:Empleado[]=[
//        new Empleado("Juan","Díaz","Presidente",7500),
//        new Empleado("Ana","Martín","Directora",5500),
//        new Empleado("María","Fernández","Jefa Sección",3500),
//        new Empleado("Laura","López","Administrativo",2500)
//    ];

    obetenerEmpleados() {
        return this.dataService.cargarEmpleados();
    }


    agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar:" + "\n" + empleado.nombre + "\n" + "Salario:" + empleado.salario);
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados);
    }

    encontrarEmpleado(indice: number): Empleado {

        let empleado:Empleado=this.empleados[indice];
        return empleado;
    }

    actualizarEmpleado(indice: number, empleado: Empleado) {
        let empleadoModificado:Empleado=this.empleados[indice];
        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;

        this.dataService.actualizarEmpleado(indice,empleado);
    }

    eliminarEmpleado(indice: number) {
        this.empleados.splice(indice,1);

        this.dataService.eliminarEmpleado(indice);

        if (this.empleados!=null) this.dataService.guardarEmpleados(this.empleados);
    }
}