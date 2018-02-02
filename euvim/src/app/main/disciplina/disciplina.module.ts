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
         MatNativeDateModule,
         MatDialogModule } from '@angular/material';

import { FormsModule,
         ReactiveFormsModule,
         FormBuilder } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DisciplinaService } from '../services/disciplina.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProfessorService } from './professor.service';
import { ProfessorComponent } from './professor/professor.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { AuthInterceptorService } from '../services/auth.interceptor.service';
import { RequestErrorModule } from '../../request-error/request-error.module';

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
    HttpClientModule,
    MatDialogModule,
    RequestErrorModule
  ],
  declarations: [ConsultaComponent, FormularioComponent, ProfessorComponent, QrcodeComponent],
  entryComponents: [ProfessorComponent, QrcodeComponent],
  providers: [FormBuilder,
              DisciplinaService,
              HttpClient,
              ProfessorService,
              { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptorService,
                multi: true
              }
            ]
})
export class DisciplinaModule { }
