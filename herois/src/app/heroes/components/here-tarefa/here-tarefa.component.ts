import { Component, Input } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-here-tarefa',
  templateUrl: './here-tarefa.component.html',
  styles: [
    `
    mat-card {
      margin-top: 20px
    }
   `
  ]

})
export class HereTarefaComponent {

@Input() heroe!: Heroe;

}
