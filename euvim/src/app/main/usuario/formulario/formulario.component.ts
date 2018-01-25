import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public perfis = [
    {id: 1, descricao: 'Perfil 1'},
    {id: 2, descricao: 'Perfil 2'},
    {id: 3, descricao: 'Perfil 3'}
  ]

  constructor() { }

  ngOnInit() {
  }

}