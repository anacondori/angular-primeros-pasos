import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
            CounterModule, HeroesModule,
            DbzModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'Heroes';
  public counter:number = 10;

/*
  incrementarPor1(){
    this.counter=this.counter+1;
  }
  decrementarPor1(){
    this.counter-=1;
  }*/

  increaseBy(value: number):void{
       if (value ==0) {
          this.counter = 10;
          return ;
       }
       this.counter+=value;
  }

}
