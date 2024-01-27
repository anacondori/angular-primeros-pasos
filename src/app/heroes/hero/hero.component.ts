import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name: string = 'ironman';
  public edad: number = 45;


  get capitlizadoName():string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${ this.name } - ${ this.edad }`;
  }

  changeHero(){
    this.name = 'spiderman';
  }
  changeAge(){
    this.edad = 25;
  }
}
