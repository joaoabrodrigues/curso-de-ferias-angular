import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaService } from '../disciplina.service';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public segmentos = [
    { id: 'BACKEND', descricao: 'Backend' },
    { id: 'FRONTEND', descricao: 'Frontend' },
    { id: 'MOBILE', descricao: 'Ionic' }
  ];

  public disciplinaForm: FormGroup;

  public professores = [];

  public professorSelecionado;

  private id = null;

  constructor(private _formBuilder: FormBuilder,
              private _activatedRouter: ActivatedRoute,
              private _disciplinaService: DisciplinaService,
              private _professorService: ProfessorService,
              private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this._professorService.professores().subscribe(suc => {
      this.professores = suc;
      this.obterRegistroEdicao();
    });
  }

  private obterRegistroEdicao(){
    this._activatedRouter.params.subscribe(params => {
      this.id = params.id;
      if (this.id) {
          this._disciplinaService.getOne(this.id).subscribe(retorno => {
            let resultado = Object.assign({},retorno);
            resultado.professores = [];
            this.disciplinaForm.setValue(resultado);
            retorno.professores.forEach(element => {
              this.professorSelecionado = this.professores.find(p => p.id == element);
              this.adicionarProfessor();
            });
        }); 
      }
    });
  }

  save() {
    if (this.disciplinaForm.valid) {
      if (this.id) {
        this._disciplinaService.edit(this.disciplinaForm.value).subscribe(suc => {
          this.disciplinaForm.reset();
          this._router.navigate(['/main/disciplina/consulta']);
        });
      } else {
        this._disciplinaService.add(this.disciplinaForm.value).subscribe(suc => {
          this.disciplinaForm.reset();
          this._router.navigate(['/main/disciplina/consulta']);
        });
      }
    }
  }

  createForm() {
    this.disciplinaForm = this._formBuilder.group({
      id: '',
      descricao: ['', Validators.required],
      professores: this._formBuilder.array([]),
      dataInicio: ['', Validators.required],
      dataTermino: ['', Validators.required],
      segmento: ['', Validators.required],
      urlLogo: ['']
    });
  }

  notFound(event) {
    event.target.src = 'https://media.giphy.com/media/gngO1gmBhS9na/giphy.gif';
  }

  adicionarProfessor() {
    if (this.professorSelecionado) {
      let listProfessores = <FormArray>this.disciplinaForm.get("professores");
      listProfessores.value.push(this.professorSelecionado.id);
      this.professorSelecionado.selecionado = true;
      delete this.professorSelecionado;
    }
  }

  nomeProfessor(id) {
    let professor = this.professores.find(p => p.id == id)
    return professor ? professor.nome : 'Não localizado';
  }

  removerProfessor(id) {
    let listProfessores = <FormArray>this.disciplinaForm.get("professores");
    let index = listProfessores.value.findIndex(p => p == id);
    if (index > -1) {
      listProfessores.value.splice(index, 1);
      this.professores.find(p => p.id == id).selecionado = false;
    }
  }
}
