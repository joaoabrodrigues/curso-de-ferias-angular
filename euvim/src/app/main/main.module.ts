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
         MatTooltipModule,
         MatOptionModule, 
         MatSelectModule} from '@angular/material';

import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';

import { FlexLayoutModule } from '@angular/flex-layout'

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
    FlexLayoutModule
  ],
  declarations: [MainComponent, ConsultaComponent, FormularioComponent]
})

export class MainModule { }