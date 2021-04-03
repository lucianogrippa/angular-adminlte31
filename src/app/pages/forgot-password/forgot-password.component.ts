import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public isAuthLoading = false;
  public recoveryForm: FormGroup;

  constructor(
    private renderer: Renderer2,
    private toastr: ToastrService,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.querySelector("app-root"), "login-page");
    this.recoveryForm = new FormGroup({
      email: new FormControl(null, Validators.required)
    });
  }

  recoveryPassword() {

  }
}
