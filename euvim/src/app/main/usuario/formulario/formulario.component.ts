import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder){
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.usuarioForm = this.formBuilder.group({
      nome: [],
      email: [],
      login: [],
      perfil: [],
      senha: [],
      confirmacao: []
    })
  }

}