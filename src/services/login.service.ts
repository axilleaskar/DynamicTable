import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { routerNgProbeToken } from "@angular/router/src/router_module";
import { Observable } from "rxjs";
import { GlobalService } from "./global.service";
@Injectable({
  providedIn: "root",
})
export class LoginService {
  public loginStatus = false;
  private url: string = "/assets/data/login.json";
  constructor(private http: HttpClient, private globalService:GlobalService) {}

  getLogin(): Observable<Ilogin[]> {
    return this.http.get<Ilogin[]>(this.url);
  }

  login(un: string, pw: string) {
    if (un == "admin" && pw == "admin") {
      this.globalService.setLocalStorageItem("username", "admin")
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }
}

export interface Ilogin{
  username:string;
  password:string;
}
