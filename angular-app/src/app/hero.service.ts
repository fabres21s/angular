/**
 * Servicio encargado de realizar la consulta a mock-heroes
 * y buiscar entre los héroes a través de el id
 */

import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
     
     //simulando una latencia de 2 segundos; pero no sirve
//    return new Promise(resolve => {
//      setTimeout(() => resolve(this.getHeroes()), 200);
//      
//    });
  }
  
  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}