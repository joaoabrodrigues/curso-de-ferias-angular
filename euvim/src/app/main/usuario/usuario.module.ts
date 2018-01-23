import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConsultaComponent, RelatorioComponent]
})
export class UsuarioModule { }
