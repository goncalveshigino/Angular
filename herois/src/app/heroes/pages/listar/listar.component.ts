import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
    `
     mat-card {
       margin-top: 20px
     }
    `
  ]
})
export class ListarComponent implements OnInit {

  heroes: Heroe[] = []

  constructor( private heroesServices: HeroesService) { }

  ngOnInit(): void {
    
    this.heroesServices.getHeroes()
      .subscribe( resp => this.heroes = resp );

  }

}
