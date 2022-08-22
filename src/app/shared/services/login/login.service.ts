import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/class/login';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private loginApi:HttpClient) { }

  postlogin(login:Login){
    return this.loginApi.post(`${environment.baseUrl}login`,login,{responseType:'text'})
  }

}
