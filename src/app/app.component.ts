import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cookieService: CookieService) {

  }
  //constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {
  //}
  ngOnInit() {

  }
  

}
