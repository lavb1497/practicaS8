import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mostrarAcceso = false;
  usuario!:string;
  password!:string | number
  mostrarError = false;
  mensajeError = "Credenciales incorrectas, inténtalo nuevamente.";

  ingresar () {
    if (this.usuario == "Angular" && this.password == "123456") {
      this.mostrarAcceso = true;
      this.mostrarError = false;
    }
    else if (this.usuario != "Angular" && this.password == "123456") {
      this.mostrarError = true;
    }
    else if (this.usuario == "Angular" && this.password != "123456"){
      this.mostrarError = true;
    } else {
      this.mostrarError = true;
    }
  }
}
