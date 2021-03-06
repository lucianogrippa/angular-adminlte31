import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { BlankComponent } from "./views/blank/blank.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { RegisterComponent } from "./pages/register/register.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { AuthGuard } from "./guards/auth.guard";
import { NonAuthGuard } from "./guards/non-auth.guard";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "blank",
        component: BlankComponent,
      },
      {
        path: "",
        component: DashboardComponent,
      },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [NonAuthGuard],
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    canActivate: [NonAuthGuard]
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
