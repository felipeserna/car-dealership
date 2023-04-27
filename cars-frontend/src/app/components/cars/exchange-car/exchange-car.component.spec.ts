import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCarComponent } from './exchange-car.component';

describe('ExchangeCarComponent', () => {
  let component: ExchangeCarComponent;
  let fixture: ComponentFixture<ExchangeCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
