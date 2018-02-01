import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DisciplinaService } from '../disciplina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  public displayedColumns = ['descricao', 'professores', 'dataInicio', 'dataTermino', 'segmento', 'urlLogo', 'id'];
  public dataSource = null;

  constructor(private _disciplinaService: DisciplinaService, private _router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  private getAll() {
    this._disciplinaService.getAll().subscribe(suc => {
      this.dataSource = new MatTableDataSource<any>(suc);
    });
  }

  public delete(id) {
    this._disciplinaService.delete(id).subscribe(suc => { this.getAll() });
  }

  public edit(id) {
    this._router.navigate(['/main/disciplina/editar', id]);
  }
}
