import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private regService:HttpClient) { }

  postRegistrationSubmit(formData){
    return this.regService.post(`${environment.baseUrl}saveUser`,formData,{responseType:'text'})
  }

}
