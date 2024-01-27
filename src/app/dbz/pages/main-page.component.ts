import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/caracter.interface'; //dbz.service.ts

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

//dbz.service.ts
/*  public characters: Character[]=[{
      name: 'Krillin',
      power:1000
    },{
      name: 'Goku',
      power:950
    },{
      name: 'Vegeta',
      power:7500
    }
  ];

  onNewCharacter(character: Character):void {
    console.log('MainPage-onNewCharacter', character);
    this.characters.push(character);
  }

  onDeleteCharacter(id:number):void{
    console.log('MainPage-onDeleteCharacter', id);
    this.characters.splice(id,1);
  }*/

  constructor( private _dbzService: DbzService){  }

  get characters(): Character[] {
    return [...this._dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this._dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this._dbzService.addCharacter(character);
  }

}
