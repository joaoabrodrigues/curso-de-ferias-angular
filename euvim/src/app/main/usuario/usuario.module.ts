import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { UsuarioRouting } from './usuario.routing';

import { MatSidenavModule,
         MatButtonModule,
         MatIconModule,
         MatListModule,
         MatToolbarModule,
         MatCardModule,
         MatTableModule,
         MatInputModule,
         MatTooltipModule,
         MatOptionModule,
         MatSelectModule } from '@angular/material';

import { FormsModule,
         ReactiveFormsModule,
         FormBuilder } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { UsuarioService } from './usuario.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRouting,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [FormBuilder, UsuarioService, HttpClient]
})
export class UsuarioModule { }
