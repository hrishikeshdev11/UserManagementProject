import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMainComponent } from './core/pages/dashboard/dashboard-main/dashboard-main.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { RegistrationComponent } from './shared/pages/registration/registration.component';
import { UnlockAccountComponent } from './shared/pages/unlock-account/unlock-account.component';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'unlockAcc',component:UnlockAccountComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:DashboardMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
