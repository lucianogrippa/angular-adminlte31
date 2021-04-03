import { Component, OnInit, OnDestroy, Renderer2 } from "@angular/core";
import { AppService } from "../../services/app.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public isAuthLoading = false;
  constructor(
    private renderer: Renderer2,
    private toastr: ToastrService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.querySelector("app-root"), "login-page");
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.appService.login();
    } else {
      this.toastr.error("Invalid username or password", "Toastr fun!");
    }
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector("app-root"), "login-page");
  }
}
