import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 

  displayedColumns = ['nome', 'login', 'email', 'perfil', 'id'];
  dataSource = new MatTableDataSource(USUARIO_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

const USUARIO_DATA: Usuario[] = [
  {id: 1, nome: 'Nome 1', login: 'login1', email: 'email1@gmail.com', perfil: 'Perfil 1'},
  {id: 2, nome: 'Nome 2', login: 'login2', email: 'email2@gmail.com', perfil: 'Perfil 2'},
  {id: 3, nome: 'Nome 3', login: 'login3', email: 'email3@gmail.com', perfil: 'Perfil 3'},
];

export interface Usuario {
  id: number;
  nome: string;
  login: string;
  email: string;
  perfil: string;
}