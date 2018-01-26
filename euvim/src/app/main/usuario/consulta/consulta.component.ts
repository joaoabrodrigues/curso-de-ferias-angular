import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  public displayedColumns = ['nome', 'login', 'email', 'perfil', 'id'];
  public dataSource = null;

  constructor(private _usuarioService:UsuarioService, private _router:Router) { }

  ngOnInit() {
    this.getAll();
  } 

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  
  private getAll() {
    let users = this._usuarioService.getAll();
    this.dataSource = new MatTableDataSource<any>(users);
  }

  public delete(id) {
    this._usuarioService.delete(id);
    this.getAll();
  }

  public edit(id) {
    this._router.navigate(['/main/usuario/editar', id]);
  }
}