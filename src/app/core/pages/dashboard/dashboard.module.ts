import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { HeaderComponent } from '../../headers/header/header.component';
// import { HeaderModule } from '../../headers/header/header.module';


@NgModule({
  declarations: [DashboardMainComponent, HeaderComponent],
  imports: [
    CommonModule,
    // HeaderModule
  ]
})
export class DashboardModule { }
