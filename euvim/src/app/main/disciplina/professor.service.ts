import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProfessorService {

  private _userURL = environment.url + environment.version + '/usuarios';

  constructor(private _httpClient: HttpClient) { }

  getAll() {
    const httpParams = new HttpParams().set('tipo', 'PROFESSOR');
    return this._httpClient.get<Array<any>>(this._userURL, { params: httpParams });
  }

  getOne(id) {
    return this._httpClient.get<any>(this._userURL + '/' + id);
  }

}
