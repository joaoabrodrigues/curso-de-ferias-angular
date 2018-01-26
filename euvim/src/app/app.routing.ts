import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/main/home', pathMatch: 'full' }
        ], { useHash: true })
    ]

})

export class AppRoutingModule { }