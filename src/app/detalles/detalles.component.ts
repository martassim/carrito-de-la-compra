import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: []
})
export class DetallesComponent implements OnInit {
  viajeObservable: Observable<any[]>;
  id: number;
  reserva: any;
  viaje={};
  constructor(private router: Router,private cookieService: CookieService,private route: ActivatedRoute, private db: AngularFireDatabase) { }


  ngOnInit() {
    console.log("ID");
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.viajeObservable=this.getDetalleViajes('/viajes');
    
  }

  getDetalleViajes(listPath) {
    return this.db.list(listPath).valueChanges();
  }

  getViajes(listPath) {
    console.log("getViajes");
    return this.db.list(listPath).valueChanges();

   
    }
    
    reservar(ident,nombre,fot,preci,cant) {
      this.reserva = {   
        titulo: nombre.value,
        foto: fot.value,
        precio: preci.value,
        cantidad: cant.value
     };
      this.cookieService.set(ident.value, JSON.stringify(this.reserva)); 
      this.router.navigate(['/carrito'])
      }
    }
 