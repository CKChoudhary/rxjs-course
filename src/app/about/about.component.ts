import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, interval, merge, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { createHttpObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const http$ = createHttpObservable('/api/courses');

    const sub = http$.subscribe(console.log)

    setTimeout(() => {
      sub.unsubscribe()
    }, 0);

  //   const interval1$ = interval(1000);
  //  // const interval2$ = interval1$.pipe(map(x => x * 10));
  //   //const result$ = merge(interval1$, interval2$);

  //   const sub = interval1$.subscribe(console.log);
    
  //   setTimeout(() => {
  //     sub.unsubscribe()
  //   }, 5000);
    

  }

}
