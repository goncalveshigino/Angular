import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interface/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]>{
     return this.http.get<Heroe[]>('http://localhost:3000/heroes')
  }
}
