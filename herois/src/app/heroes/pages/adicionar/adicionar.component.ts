import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styles: [
  ]
})
export class AdicionarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      dec: 'DC- comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics' 
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: ''
    
  }

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  guardar() {
    
    if (this.heroe.superhero.trim().length == 0) {
      return;
    }

    this.heroesService.adicionarHeroe(this.heroe)
      .subscribe(resp => {
         console.log('Resposta', resp );
       })
  }

}
