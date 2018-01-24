import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRouting } from './main.routing';

import { MatSidenavModule,
         MatButtonModule,
         MatIconModule,
         MatListModule, 
         MatToolbarModule, 
         MatCardModule,
         MatTableModule,
         MatFormFieldModule,
         MatInputModule, 
         MatTooltipModule} from '@angular/material';

import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';

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
    MatTooltipModule
  ],
  declarations: [MainComponent, ConsultaComponent, FormularioComponent]
})

export class MainModule { }