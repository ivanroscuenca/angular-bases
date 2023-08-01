import { Injectable } from '@angular/core';
import { Character } from './interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Vegeta',
      power: 8000,
    },
  ];

  addNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  deleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

  constructor() {}
}