import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserCoreServiceService {

  constructor(private userCoreApi:HttpClient) { }

  getCountryData(){
    return this.userCoreApi.get(`${environment.baseUrl}countries`);
  }

  getStateDataByCountryID(id){
    return this.userCoreApi.get(`${environment.baseUrl}states/${id}`);
  }

  getCityDataByStateID(id){
    return this.userCoreApi.get(`${environment.baseUrl}cities/${id}`);
  }

  checkEmail(email){
    return this.userCoreApi.get(`${environment.baseUrl}emailcheck/${email}`,{responseType:'text'})
  }
}
