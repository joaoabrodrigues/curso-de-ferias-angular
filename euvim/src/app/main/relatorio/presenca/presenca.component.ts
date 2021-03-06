import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DisciplinaService } from '../../services/disciplina.service';
import { RelatorioService } from '../relatorio.service';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.scss']
})
export class PresencaComponent implements OnInit {
  public disciplina;
  public form: FormGroup;
  public disciplinas;
  public relatorio = [];
  public filtred;

  constructor(private _formBuilder: FormBuilder,
              private _disciplinaService: DisciplinaService,
              private _relatorioService: RelatorioService) {
    this.createForm();
   }

  ngOnInit() {
    this._disciplinaService.getAll().subscribe(suc => {
      this.disciplinas = suc;
    });
  }

  createForm() {
    this.form = this._formBuilder.group({
      disciplina: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required]
    });
  }

  gerarRelatorio() {
    this.filtred = true;
    this.relatorio = null;
    this._relatorioService.listarPresencaPorDisciplina(this.form.value).subscribe(suc => {
      this.relatorio = suc;
    });
    this.disciplina = this.disciplinas.find((item) => item.id === this.form.value.disciplina);
  }

  abrirCalendario(dtInicial) {
    console.log('abrir calendario');
  }

}
