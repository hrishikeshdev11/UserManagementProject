import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHeaderComponent } from './core/headers/admin-header/admin-header.component';
import { UserHeaderComponent } from './core/headers/user-header/user-header.component';
import { HeaderComponent } from './core/headers/header/header.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { RegistrationComponent } from './shared/pages/registration/registration.component';
import { UnlockAccountComponent } from './shared/pages/unlock-account/unlock-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './core/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ForgetPwdComponent } from './shared/pages/forget-pwd/forget-pwd.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    UnlockAccountComponent,
    FooterComponent,
    ForgetPwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
