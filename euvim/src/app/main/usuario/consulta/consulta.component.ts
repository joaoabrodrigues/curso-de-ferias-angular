import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

  constructor(private _usuarioService:UsuarioService) {
    this.dataSource = new MatTableDataSource<any>(this._usuarioService.getAll());
   }

  ngOnInit() {
  } 

  displayedColumns = ['nome', 'login', 'email', 'perfil', 'id'];
  dataSource = null;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}