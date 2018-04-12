import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: []
})
export class AnadirComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }

  viaje = {
    titulo: "",
    description: "",
    imagen: "",
    precio: "",
    id: ""
  };
  // ref = firebase.database().ref('viajes/');

  ngOnInit() {
  }

  // saveForm() {
  //   let newData = this.ref.push();
  //   newData.set(this.viaje);
  // }

}
