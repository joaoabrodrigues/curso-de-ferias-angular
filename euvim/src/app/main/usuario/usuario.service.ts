import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  private _userURL = environment.url + environment.version + '/usuarios';

  constructor(private _http: HttpClient) { }

  add(usuario) {
    return this._http.post(this._userURL, usuario, { responseType: 'text' });
  }

  edit(usuario) {
    return this._http.put(this._userURL + '/' + usuario.id, usuario, { responseType: 'text' });
  }

  getOne(id){
    return this._http.get<any>(this._userURL + '/' + id);
  }

  getAll() {
    return this._http.get<Array<any>>(this._userURL);
  }

  delete(id) {
    return this._http.delete(this._userURL + '/' + id, { responseType: 'text'});
  }

}
