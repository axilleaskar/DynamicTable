import { Component } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  constructor(private loginService:LoginService){}

  logout(){
    this.loginService.logout()
  }

  isLoggedIn(){
    return localStorage.getItem("username")
  }
}
