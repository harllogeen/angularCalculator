import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitComponent } from './digit.component';

describe('DigitComponent', () => {
  let component: DigitComponent;
  let fixture: ComponentFixture<DigitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitComponent]
    });
    fixture = TestBed.createComponent(DigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
