import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  private mock = [
    {id: 1, nome: 'Nome 1', login: 'login1', email: 'email1@gmail.com', perfil: 'ADMINISTRADOR', senha: '', confirmacao: ''},
    {id: 2, nome: 'Nome 2', login: 'login2', email: 'email2@gmail.com', perfil: 'ALUNO', senha: '', confirmacao: ''},
    {id: 3, nome: 'Nome 3', login: 'login3', email: 'email3@gmail.com', perfil: 'PROFESSOR', senha: '', confirmacao: ''}
  ];

  private _version = '/api/v1';
  private _userURL = environment.url + this._version + '/usuarios';

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
