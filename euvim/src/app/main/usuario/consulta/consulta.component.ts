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

  constructor(private _usuarioService: UsuarioService, private _router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  private getAll() {
    const users = this._usuarioService.getAll().subscribe(suc => {
      this.dataSource = new MatTableDataSource<any>(suc);
    });
  }

  public delete(id) {
    this._usuarioService.delete(id).subscribe(suc => { this.getAll() });
  }

  public edit(id) {
    this._router.navigate(['/main/usuario/editar', id]);
  }
}
