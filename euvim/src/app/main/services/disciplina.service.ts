import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DisciplinaService {

  private _disciplinaURL = environment.url + environment.version + '/disciplinas';

  constructor(private _http: HttpClient) { }

  add(disciplina) {
    return this._http.post(this._disciplinaURL, disciplina, { responseType: 'text' });
  }

  edit(disciplina) {
    return this._http.put(this._disciplinaURL + '/' + disciplina.id, disciplina, { responseType: 'text' });
  }

  getOne(id){
    return this._http.get<any>(this._disciplinaURL + '/' + id);
  }

  getAll() {
    return this._http.get<Array<any>>(this._disciplinaURL);
  }

  delete(id) {
    return this._http.delete(this._disciplinaURL + '/' + id, { responseType: 'text'});
  }

}
