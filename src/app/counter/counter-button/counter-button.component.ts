import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {
  @Output() increament = new EventEmitter<void>();
  @Output() decreament = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onIncreament(){
    this.increament.emit();
  }
  onDecreament(){
    this.decreament.emit();
  }
  onReset(){
    this.reset.emit();
  }
}
