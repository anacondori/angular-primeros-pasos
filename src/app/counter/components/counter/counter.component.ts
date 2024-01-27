import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter= {{counter}}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(0)">RESET</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})

export class CounterComponent{
  public counter:number = 10;

  increaseBy(value: number):void{
    if (value ==0) {
       this.counter = 10;
       return ;
    }
    this.counter+=value;
}
}
