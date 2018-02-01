import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { Observable } from 'rxjs/Observable';
import { HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const item = JSON.parse(sessionStorage.getItem('access'));
    const validacao = item && item.access_token != null;
    if (validacao) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${item.access_token}`
        }
      });
      return next.handle(req);
    }
  }

  constructor() { }
}
