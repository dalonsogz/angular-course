import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iría un empleado</p>"
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {


  private nombre="Juan";

  private apellido="Díaz";

  edad=18;

  empresa="Pildoras Informáticas"


  getNombre(){
    return this.nombre;
  }

  getApellido() {
    return this.apellido;
  }

//  getEdad(){
//    return this.edad;
// }

//  getEmpresa() {
//    return this.empresa;
//  }

  llamaEmpresa(value:String) {
    
  }
  
  habilitacionCuadro=true;

  usuRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
//    alert(event.target)   
    if ((<HTMLInputElement>event.target).value=="true"){
      this.textoDeRegistro="El usuario se acaba de registrar";
      this.habilitacionCuadro=false;
    } else {
      this.textoDeRegistro="No hay nadie registrado";
      this.habilitacionCuadro=true;
    }
  }

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
