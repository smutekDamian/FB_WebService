/**
 * Created by damian on 23.04.17.
 */
import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes';

@Injectable()
export class HelloService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}

