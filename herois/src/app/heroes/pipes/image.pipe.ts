import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    return `assets/heroes/${ heroe.id }.jpg`;
  }

}
