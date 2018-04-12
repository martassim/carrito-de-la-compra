import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AnadirComponent } from './anadir/anadir.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ReservaComponent } from './reserva/reserva.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AuthService } from './anadir/auth.service';
import { CookieService } from 'ngx-cookie-service';

const appRoutes: Routes = [
  {
    path: 'mostrar',
    component: MostrarComponent,
    data: { title: 'Home' }
  },
  {
    path: 'reserva',
    component: ReservaComponent,
    data: { title: 'reserva' }
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    data: { title: 'carrito' }
  },
  {
    path: 'detalles/:id',
    component: DetallesComponent,
    data: { title: 'detalles' }
  },
  {
    path: 'anadir',
    component: AnadirComponent,
    data: { title: 'Blog' }
  },
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent,
    DetallesComponent,
    AnadirComponent,
    CarritoComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
