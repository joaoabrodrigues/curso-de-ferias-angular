import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRouting } from './main.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainRouting
  ],
  declarations: [MainComponent]
})
export class MainModule { }
