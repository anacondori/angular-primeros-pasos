import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-ist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames: string[]=['Spiderman','Ironman','Wonder woman','Hulk','Thor'];
    public deleteHero?: string;

    borrarUltimoHero(){
      this.deleteHero = this.heroNames.pop();
      console.log('borrarUltimoHero', this.deleteHero);
    }
}
