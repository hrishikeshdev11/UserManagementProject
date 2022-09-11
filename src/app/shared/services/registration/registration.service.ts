import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCoreServiceService } from 'src/app/core/services/user-core-service.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private regService:HttpClient, private getToken:UserCoreServiceService) { }

  postRegistrationSubmit(formData){
    const header= new HttpHeaders({
      Authorization:`Bearer ${this.getToken.gernerateToken}`
    })
    return this.regService.post(`${environment.baseUrl}saveUser`,formData,{responseType:'text'})
  }

}
