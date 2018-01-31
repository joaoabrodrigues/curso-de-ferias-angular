import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaService } from '../disciplina.service';
import { InstrutorService } from '../instrutor.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public segmentos = [
    { id: 'Backend', descricao: 'Backend' },
    { id: 'Front-end', descricao: 'Frontend' },
    { id: 'Mobile', descricao: 'Ionic' }
  ];

  public disciplinaForm: FormGroup;

  public instrutores = [];

  private id = null;

  constructor(private _formBuilder: FormBuilder,
              private _activatedRouter: ActivatedRoute,
              private _disciplinaService: DisciplinaService,
              private _instrutorService: InstrutorService,
              private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this._instrutorService.instrutores().subscribe(suc => {
      this.instrutores = suc;
    });

    this._activatedRouter.params.subscribe(params => {
      this.id = params.id;
      if (this.id) {
          this._disciplinaService.getOne(this.id).subscribe(retorno => {
          this.disciplinaForm.setValue(retorno);
        });
      }
    });
  }

  public save() {
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
      instrutores: ['', this._formBuilder.array([]), Validators.required],
      dataInicio: ['', Validators.required],
      dataTermino: ['', Validators.required],
      segmento: ['', Validators.required],
      urlLogo: ['']
    });
  }
}
