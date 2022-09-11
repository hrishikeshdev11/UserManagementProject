import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterceptor } from 'src/app/authentication/auth.interceptor';
import { Login } from 'src/app/class/login';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // user = new BehaviorSubject<User>(null);

  constructor(private loginApi:HttpClient) { }

  postlogin(login:Login){
    return this.loginApi.post(`${environment.baseUrl}login`,login,{responseType:'text'})
  }

}
