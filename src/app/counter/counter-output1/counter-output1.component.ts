import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { loaddata } from '../state/counter.actions';
import { CountInterface } from '../state/counter.state';
import { HttpClient } from '@angular/common/http';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output1',
  templateUrl: './counter-output1.component.html',
  styleUrls: ['./counter-output1.component.scss']
})
export class CounterOutput1Component implements OnInit {
  items: any = [];
  constructor(private http: HttpClient, private store: Store<{counter: CountInterface, loaddata: []}>) { }
  count?: number;
  public count$?: Observable<{ counter: number }>;
  public counterSubscription = new Subscription;
  ngOnInit() {
    this.counterSubscription = this.store.select(getCounter).subscribe((res) => {
      this.count = res
    })

    this.count$ = this.store.select('counter');
    this.http.get('https://dummyjson.com/products').subscribe((data: any) => {
      this.items = data;
      this.store.dispatch(loaddata(this.items))
    })
  }

  // ngOnDestroy() {
  //     if(this.counterSubscription){
  //       this.counterSubscription.unsubscribe();
  //     }
  // }
}
