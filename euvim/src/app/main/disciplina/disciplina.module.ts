import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DisciplinaRouting } from './disciplina.routing';

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
         MatSelectModule,
         MatDatepickerModule, 
         MAT_DATE_LOCALE,
         MatNativeDateModule} from '@angular/material';

import { FormsModule,
         ReactiveFormsModule,
         FormBuilder } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DisciplinaService } from './disciplina.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InstrutorService } from './instrutor.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DisciplinaRouting,
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
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [FormBuilder,
              DisciplinaService,
              HttpClient,
              InstrutorService,
              { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
            ]
})
export class DisciplinaModule { }
