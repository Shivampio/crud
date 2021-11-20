import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/core/services/authentication.service";
import { HttpClientService } from "src/app/core/services/http-client.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  clientId: any;
  isRedirect: boolean = true;
  lists: Object;
  appExist: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: AuthenticationService,
    private router:Router
  ) {}
  hide = true;
  loginForm: FormGroup;

  ngOnInit() {
      if(sessionStorage.getItem('login')){
        this.router.navigate(['dashboard'])
      }
      this.createForm();
  }

  onSubmit() {
    this.loginService.authenticate(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
    };

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
