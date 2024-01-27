import { Injectable } from '@angular/core';
import { Character } from '../interfaces/caracter.interface';
//https://www.npmjs.com/package/uuid
import { v4 as uuid } from 'uuid'; //ejecutar:npm i --save-dev @types/uuid

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]=[{
      id: uuid(),
      name: 'Krillin',
      power:1000
    },{
      id: uuid(),
      name: 'Goku',
      power:950
    },{
      id: uuid(),
      name: 'Vegeta',
      power:7500
    }
  ];


  //onNewCharacter({ name, power}: Character):void { //desestructuracion
  //  const newCharacter: Character = {id: uuid(),name,power}
    // onNewCharacter(character: Character):void {
  addCharacter(character: Character):void {
    console.log('MainPage-onNewCharacter', character);

    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    };

    console.log('MainPage-onNewCharacter.newCharacter', newCharacter);
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id:number):void{
    console.log('MainPage-onDeleteCharacter', id);

    this.characters.splice(id,1);
  }

  deleteCharacterById(id:string):void{
    console.log('MainPage-deleteCharacterById', id);

    this.characters = this.characters.filter( character => character.id !== id);
    console.log('MainPage-deleteCharacterById.filter', this.characters);
  }

}
