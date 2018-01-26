import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {
  
  private mock = [  
    {id: 1, nome: 'Nome 1', login: 'login1', email: 'email1@gmail.com', perfil: 'Perfil 1'},
    {id: 2, nome: 'Nome 2', login: 'login2', email: 'email2@gmail.com', perfil: 'Perfil 2'},
    {id: 3, nome: 'Nome 3', login: 'login3', email: 'email3@gmail.com', perfil: 'Perfil 3'}
  ];

  constructor() { }

  add(usuario) {
    let insertId = 0;
    this.mock.forEach(item => {
      insertId = insertId > item.id ? insertId : item.id;
    })
    usuario.id = insertId;
    this.mock.push(usuario);
  }

  remove(id) {
    let index = this.mock.findIndex(item => item.id == id);
    if (index > -1) {
      this.mock = this.mock.splice(index, 1);
    }
  }

  getAll() {
    return this.mock;
  }

  getOne(id){
    return this.mock.find(item => item.id == id);
  }

  edit(usuario) {
    let index = this.mock.findIndex(item => item.id == usuario.id);
    if (index > -1) { 
      this.mock[index] = usuario;
    }
  }

}
