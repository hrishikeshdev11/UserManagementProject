import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { AuthInterceptor } from 'src/app/authentication/auth.interceptor';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserCoreServiceService {

  constructor(private userCoreApi: HttpClient) { }
  admin = [
   ['username', 'admin'],
    ['password', 'admin123']
]
  gernerateToken() {
    return this.userCoreApi.post(`${environment.baseUrl}athorization/generate/`,this.admin,{responseType:'text'})
  }

  setToken(token: any) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getCountryData() {
    // const header= new HttpHeaders({
    //   Authorization:`Bearer ${this.gernerateToken(this.userCoreApi)}`
    // })
    return this.userCoreApi.get(`${environment.baseUrl}countries`);
  }

  getStateDataByCountryID(id) {
    return this.userCoreApi.get(`${environment.baseUrl}states/${id}`);
  }

  getCityDataByStateID(id) {
    return this.userCoreApi.get(`${environment.baseUrl}cities/${id}`);
  }

  checkEmail(email) {
    return this.userCoreApi.get(`${environment.baseUrl}emailcheck/${email}`, { responseType: 'text' })
  }
}
