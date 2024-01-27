import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/caracter.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Trunks',
    power:10
  }];

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{
    console.log('onDeleteCharacter', id);

    if ( !id )  return;
    this.onDelete.emit(id);
  }

}
