import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  private urlLogin = environment.url + '/api/v1/login';

  constructor(private _httpCliente: HttpClient, private _router: Router) { }

  public login(dados) {
    return this._httpCliente.post(this.urlLogin, dados);
 }

  public deslogar() {
    sessionStorage.removeItem('access');
    this._router.navigate(['/login']);
  }
}
