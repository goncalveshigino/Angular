import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
     img {
       width: 100%;
       border-radius: 5px;
     }

     .example-card {
        max-width: 400px;
        margin-bottom: 8px;
      }
    `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( 
               private activatedRoute: ActivatedRoute,
               private heroeServices: HeroesService,
               private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.heroeServices.getHeroePorId(id))
    )
    .subscribe(  heroe => this.heroe = heroe );
  }

  clickRegressar(){
    this.router.navigate(['/heroes/listar']);
  }

}
