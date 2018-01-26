import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ConsultaComponent } from './usuario/consulta/consulta.component';
import { FormularioComponent } from './usuario/formulario/formulario.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'main', 
              component: MainComponent,
              children: [
                {
                    path: 'home',
                    component: HomeComponent
                },
                {
                    path: 'usuario/consulta',
                    component: ConsultaComponent
                },
                {
                    path: 'usuario/adicionar',
                    component: FormularioComponent
                },
                {
                    path: 'usuario/editar/:id',
                    component: FormularioComponent
                }
              ]
            }
        ])
    ]
})

export class MainRouting { }