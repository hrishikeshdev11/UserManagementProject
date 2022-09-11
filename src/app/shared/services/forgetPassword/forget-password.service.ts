import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor(private forgetPwdApi:HttpClient) {

   }
   forgetPwdService(data){
    return this.forgetPwdApi.get(`${environment.baseUrl}forgotPwd/${data}`,{responseType:'text'});
   }
}
