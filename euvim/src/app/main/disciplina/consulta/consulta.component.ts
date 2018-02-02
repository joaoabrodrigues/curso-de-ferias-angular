import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { DisciplinaService } from '../../services/disciplina.service';
import { Router } from '@angular/router';
import { ProfessorComponent } from '../professor/professor.component';
import { QrcodeComponent } from '../qrcode/qrcode.component';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  public displayedColumns = ['descricao', 'professores', 'dataInicio', 'dataTermino', 'segmento', 'urlLogo', 'id'];
  public dataSource = null;

  constructor(private _disciplinaService: DisciplinaService,
              private _router: Router,
              private _dialog: MatDialog,
              private _loadingService: LoadingService) { }

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
      this._loadingService.callNextStatus(false);
    }, err => {
      this._loadingService.callNextStatus(false);
    });
  }

  public delete(id) {
    this._disciplinaService.delete(id).subscribe(suc => { this.getAll(); });
  }

  public edit(id) {
    this._router.navigate(['/main/disciplina/editar', id]);
  }

  exibirProfessores(listaProfessores) {
    this._dialog.open(ProfessorComponent, {
      width: '350px',
      data: { professores : listaProfessores }
    });
  }

  showQrCode(disciplina) {
    this._dialog.open(QrcodeComponent, {
      width: '260px',
      data: { id: disciplina.id,
              descricao : disciplina.descricao,
              data: new Date() }
    });
  }

  notFound(event) {
    event.target.src = 'https://media.giphy.com/media/gngO1gmBhS9na/giphy.gif';
  }
}
