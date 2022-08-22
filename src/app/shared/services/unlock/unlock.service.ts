import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UnlockService {

  constructor(private unlockApi:HttpClient) { }

  unlockAccount(formData){
    return this.unlockApi.post(`${environment.baseUrl}unlock`,formData,{responseType:'text'});
  }

}
