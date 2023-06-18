import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Registro de Usuarios';
  mensaje = "";
  registrado = false;
  nombre:string = "";
  apellido:string = "";
  cargo:string = "";
  entradas:  Array<{titulo:string}>;

  constructor(){
    this.entradas=[

      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"Javascript cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó Pascal?"}
 
    ]

  }

  registrarUsuario() {

    this.registrado=true;
    this.mensaje = "usuario registrado con éxito";

  }
}
