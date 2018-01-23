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
         MatCardModule } from '@angular/material';

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
    MatButtonModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }