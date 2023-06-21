import { Component, OnInit, inject } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  titulo = 'App Empleados';

  constructor(private loginService:LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyB2eXhcWcY1QRut4iKmkya-S0CVyYHMRuM",
      authDomain: "mis-clientes-6665d.firebaseapp.com"
    });
  }

  estaLogueado() {
    return this.loginService.estaLogueado();
  }

  logout() {
    this.loginService.logout();
  }

}
