import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './main/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/main/home', pathMatch: 'full' },
            { path: '**', redirectTo: '/login', pathMatch: 'full' }
        ], { useHash: true })
    ]

})

export class AppRoutingModule {}
