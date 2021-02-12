import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [""],
      password: [""],
    });
  }

  login() {
    this.loginService.login(
      this.userForm.get("name").value,
      this.userForm.get("password").value
    );
    if (localStorage.getItem("username")) {
      this.router.navigate(["/home"]);
    }
  }
}
