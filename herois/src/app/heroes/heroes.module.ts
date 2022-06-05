import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { AdicionarComponent } from './pages/adicionar/adicionar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HereTarefaComponent } from './components/here-tarefa/here-tarefa.component';
import { ImagePipe } from './pipes/image.pipe';





@NgModule({
  declarations: [
    AdicionarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListarComponent,
    HereTarefaComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
