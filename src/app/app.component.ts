import { Component, AfterViewInit } from '@angular/core';
import { timer, of, Observable, observable  } from 'rxjs';

//Observe Timer Example
const source = timer(1000,2000);
const subscribe = source.subscribe(val => console.log(val));

setTimeout(() => {
  subscribe.unsubscribe()
}, 10000);



//Basic Subscribing using Observer
const myObservable = of('apple', 'orange', 'grapes');
const myObserver = {
  next: (x: string) => console.log('Observer got a next value : '+ x),
  error: (err: string) => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification')
};


//Observable with Constructor Example
function seq(observer){
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);
  observer.next(5);
  observer.complete();

  return { unsubscribe(){} };
}

const sequence = new Observable(seq);
sequence.subscribe(x => console.log(x));


//The Observable that Publishes Events Example


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  title = 'angular-observable-rxjs';

  constructor(){
    myObservable.subscribe(myObserver);
  }
}
