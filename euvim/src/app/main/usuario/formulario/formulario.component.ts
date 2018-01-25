import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EqualsPasswordValidator } from '../../../validators/EqualsPasswordValidator';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public usuarioForm: FormGroup;
  public perfis = [
    {id: 'ADMINISTRADOR', descricao: 'Administrador'},
    {id: 'ALUNO', descricao: 'Aluno'},
    {id: 'PROFESSOR', descricao: 'Professor'}
  ];

  constructor(private _formBuilder: FormBuilder){
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.usuarioForm = this._formBuilder.group({
      id: '',
      nome: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      login: ['', Validators.required],
      perfil: ['', Validators.required],
      senha: ['', Validators.required],
      confirmacao: ['', Validators.required]
    },{
      validator : EqualsPasswordValidator.validate("senha", "confirmacao")
    })
}

}