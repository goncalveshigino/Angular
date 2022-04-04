import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './pages/adicionar/adicionar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [

      {
        path: 'adicionar',
        component: AdicionarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: 'heroe',
        component: HeroeComponent
      },
      {
        path: 'editar/:id',
        component: AdicionarComponent
      },
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: '**',
        redirectTo: 'listar'
      }

    ]
  }

]
  


@NgModule({
 
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
