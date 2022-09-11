import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserCoreServiceService } from '../core/services/user-core-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userToken:UserCoreServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token=this.userToken.getToken();
    const newRequest=request.clone({
      setHeaders:{
      Authorization:`Bearer ${token}`
      }
    })
    return next.handle(newRequest);
  }
}
