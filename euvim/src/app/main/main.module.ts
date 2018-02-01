import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRouting } from './main.routing';
import { FlexLayoutModule } from '@angular/flex-layout'

import { MatSidenavModule,
         MatButtonModule,
         MatIconModule,
         MatListModule,
         MatToolbarModule,
         MatCardModule } from '@angular/material';

import { FormsModule,
         ReactiveFormsModule,
         FormBuilder } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

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
    FlexLayoutModule
  ],
  declarations: [
    MainComponent,
    HomeComponent
  ],
  providers: [AuthGuard]
})

export class MainModule { }
