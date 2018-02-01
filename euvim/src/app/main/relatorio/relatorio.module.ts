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
         MatDialogModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DisciplinaService } from '../services/disciplina.service';
import { RelatorioService } from './relatorio.service';

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
    HttpClientModule
  ],
  declarations: [PresencaComponent],
  providers: [FormBuilder, DisciplinaService, RelatorioService, HttpClient]
})

export class RelatorioModule { }
