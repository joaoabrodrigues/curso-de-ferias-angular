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
    {id: 1, descricao: 'Administrador'},
    {id: 2, descricao: 'Aluno'},
    {id: 3, descricao: 'Professor'}
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