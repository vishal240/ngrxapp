import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addvalue, decreament, increament, reset } from '../state/counter.actions';
import { CountInterface } from '../state/counter.state';
@Component({
  selector: 'app-counter-button1',
  templateUrl: './counter-button1.component.html',
  styleUrls: ['./counter-button1.component.scss']
})
export class CounterButton1Component implements OnInit {
  items: any = [];
  newValaue: any = 0;
  constructor(private store: Store<{counter: CountInterface, loaddata: []}>) { }

  ngOnInit(): void {
    this.store.select('loaddata').subscribe((data: any) => {
      console.log(data)
    })
  }
  onIncreament(){
    this.store.dispatch(increament());
  }
  onDecreament(){
    this.store.dispatch(decreament());
  }
  onReset(){
    this.store.dispatch(reset());
  }
  addData(){
    this.store.dispatch(addvalue({addvalue: this.newValaue}))
  }
}
