import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'Rxjs/rx';
import { Subscription } from "rxjs/RX";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  observableVar: Subscription
  public text: string = 'START';
  public texttwo: string = 'START';
  result: any = 0;
  resulttwo: any = 0;
  constructor(public navCtrl: NavController) {  
  }
  public changeText(text) {
    if (text === 'START') {
      this.text = 'STOP';
      this.observableVar = Observable.interval(10).subscribe(() => {
        this.randomnumber();
      })
    } else {

      this.text = 'START';
      this.observableVar.unsubscribe();
    }
  }
  randomnumber() {
    this.result = Math.floor(Math.random() * 10);
  }

  public changeTexttwo(texttwo) {
    if (texttwo === 'START') {
      this.texttwo = 'STOP';
      this.observableVar = Observable.interval(10).subscribe(() => {
        this.randomnumbertwo();
      })
    } else {

      this.texttwo = 'START';
      this.observableVar.unsubscribe();
    }
  }
  randomnumbertwo() {
    this.resulttwo = Math.floor(Math.random() * 100);
  }
}