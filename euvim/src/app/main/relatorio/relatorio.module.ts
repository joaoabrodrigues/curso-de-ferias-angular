import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresencaComponent } from './presenca/presenca.component';
import { RelatorioRouting } from './relatorio.routing';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatExpansionModule,
         MatIconModule,
         MatOptionModule,
         MatSelectModule,
         MatFormFieldModule,
         MatDatepickerModule,
         MatListModule,
         MatDividerModule,
         MatButtonModule,
         MatInputModule,
         MatTooltipModule,
         MatNativeDateModule,
         MatDialogModule,
         MAT_DATE_LOCALE} from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DisciplinaService } from '../services/disciplina.service';
import { RelatorioService } from './relatorio.service';
import { ItemPresencaComponent } from './presenca/item-presenca/item-presenca.component';
import { AuthInterceptorService } from '../services/auth.interceptor.service'
import { RequestErrorModule } from '../../request-error/request-error.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RelatorioRouting,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    HttpClientModule,
    RequestErrorModule
  ],
  declarations: [PresencaComponent, ItemPresencaComponent],
  providers: [FormBuilder,
              DisciplinaService,
              RelatorioService,
              HttpClient,
              { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptorService,
                multi: true
              }
            ]
})

export class RelatorioModule { }
