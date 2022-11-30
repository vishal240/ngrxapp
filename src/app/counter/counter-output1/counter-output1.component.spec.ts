import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutput1Component } from './counter-output1.component';

describe('CounterOutput1Component', () => {
  let component: CounterOutput1Component;
  let fixture: ComponentFixture<CounterOutput1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOutput1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterOutput1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
