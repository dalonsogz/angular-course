import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices {

    constructor(private httpClient:HttpClient) {}

    cargarEmpleados() {
        return this.httpClient.get("https://mis-clientes-6665d-default-rtdb.europe-west1.firebasedatabase.app/datos.json");
    }

    guardarEmpleados(empleados:Empleado[]) {
        this.httpClient.put("https://mis-clientes-6665d-default-rtdb.europe-west1.firebasedatabase.app/datos.json",empleados).subscribe(
            response=>console.log("Se han guardado los empleados:" + response),
            
            error=>console.log("Error: " + error),


        );
    }

}