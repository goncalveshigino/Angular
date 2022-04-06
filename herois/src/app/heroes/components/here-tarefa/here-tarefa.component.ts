import { Component, Input } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-here-tarefa',
  templateUrl: './here-tarefa.component.html',

})
export class HereTarefaComponent {

@Input() heroe!: Heroe;

}
