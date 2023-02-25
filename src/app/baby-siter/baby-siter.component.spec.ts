import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabySiterComponent } from './baby-siter.component';

describe('BabySiterComponent', () => {
  let component: BabySiterComponent;
  let fixture: ComponentFixture<BabySiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabySiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabySiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
