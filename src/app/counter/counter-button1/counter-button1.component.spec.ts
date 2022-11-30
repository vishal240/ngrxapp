import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButton1Component } from './counter-button1.component';

describe('CounterButton1Component', () => {
  let component: CounterButton1Component;
  let fixture: ComponentFixture<CounterButton1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButton1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterButton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
