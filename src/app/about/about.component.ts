import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, interval, of } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const source1$ = interval(1000);
    const source2$ = of(4, 5, 6);

    const result$ = concat(source1$, source2$);

    result$.subscribe(console.log);
    

  }

}
