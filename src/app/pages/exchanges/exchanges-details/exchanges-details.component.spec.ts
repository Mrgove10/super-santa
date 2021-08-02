import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesDetailsComponent } from './exchanges-details.component';

describe('ExchangesDetailsComponent', () => {
  let component: ExchangesDetailsComponent;
  let fixture: ComponentFixture<ExchangesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
