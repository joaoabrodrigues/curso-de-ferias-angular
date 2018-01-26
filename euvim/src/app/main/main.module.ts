import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRouting } from './main.routing';
import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatSidenavModule,
         MatButtonModule,
         MatIconModule,
         MatListModule, 
         MatToolbarModule, 
         MatCardModule,
         MatTableModule,
         MatFormFieldModule,
         MatInputModule, 
         MatTooltipModule,
         MatOptionModule, 
         MatSelectModule } from '@angular/material';
import { FormsModule, 
         ReactiveFormsModule, 
         FormBuilder } from '@angular/forms';
import { UsuarioService } from './usuario/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainRouting,
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
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent, 
    ConsultaComponent, 
    FormularioComponent
  ],
  providers: [FormBuilder, UsuarioService]
})

export class MainModule { }