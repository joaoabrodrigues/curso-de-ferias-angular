import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqualsPasswordValidator } from '../../../validators/EqualsPasswordValidator';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  private id;
  public usuarioForm: FormGroup;
  public perfis = [
    {id: 'ADMINISTRADOR', descricao: 'Administrador'},
    {id: 'ALUNO', descricao: 'Aluno'},
    {id: 'PROFESSOR', descricao: 'Professor'}
  ];

  constructor(private _formBuilder: FormBuilder,
              private _activatedRouter: ActivatedRoute,
              private _usuarioService: UsuarioService,
              private _router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this._activatedRouter.params.subscribe(params => {
      this.id = params.id;
      if (this.id) {
          this._usuarioService.getOne(this.id).subscribe(retorno => {
          retorno.senha = null;
          retorno.confirmacao = null;
          delete retorno.urlFoto;
          this.usuarioForm.get('senha').setValidators(null);
          this.usuarioForm.get('confirmacao').setValidators(null);
          this.usuarioForm.setValue(retorno);
        });
      }
    });
  }

  public save() {
    if (this.usuarioForm.valid) {
      if (this.id) {
        this._usuarioService.edit(this.usuarioForm.value).subscribe(suc => {
          this.usuarioForm.reset();
          this._router.navigate(['/main/usuario/consulta']);
        });
      } else {
        this._usuarioService.add(this.usuarioForm.value).subscribe(suc => {
          this.usuarioForm.reset();
          this._router.navigate(['/main/usuario/consulta']);
        });
      }
    }
  }

  createForm() {
    this.usuarioForm = this._formBuilder.group({
      id: '',
      nome: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      login: ['', Validators.required],
      perfil: ['', Validators.required],
      senha: ['', Validators.required],
      confirmacao: ['', Validators.required]
    }, {
      validator : EqualsPasswordValidator.validate('senha', 'confirmacao')
    });
  }
}
