import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardGuard } from './authentication/route-guard.guard';
import { DashboardMainComponent } from './core/pages/dashboard/dashboard-main/dashboard-main.component';
import { ForgetPwdComponent } from './shared/pages/forget-pwd/forget-pwd.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { RegistrationComponent } from './shared/pages/registration/registration.component';
import { UnlockAccountComponent } from './shared/pages/unlock-account/unlock-account.component';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'unlockAcc',component:UnlockAccountComponent},
  {path:'login',component:LoginComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'dashboard', canActivate:[RouteGuardGuard] ,component:DashboardMainComponent},
  {path:'forgetPwd',component:ForgetPwdComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
