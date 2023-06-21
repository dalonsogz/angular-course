import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadosCComponent } from './caracteristicas-empleados-c/caracteristicas-empleados-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.services';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian';

const appRoutes:Routes=[
  {path:'', component: HomeComponentComponent},
  {path:'proyectos', component: ProyectosComponentComponent},
  {path:'quienes', component: QuienesComponentComponent, canActivate:[LoginGuardian]},
  {path:'contacto', component: ContactoComponentComponent, canActivate:[LoginGuardian]},
  {path:'actualiza/:id', component: ActualizaComponentComponent},
  {path:'login', component: LoginComponent},
  {path:'**', component: ErrorPersonalizadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadosCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ErrorPersonalizadoComponent,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices, LoginService, CookieService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
