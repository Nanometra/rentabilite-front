import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentabiliteViewComponent } from './rentabilite-view.component';

describe('RentabiliteViewComponent', () => {
  let component: RentabiliteViewComponent;
  let fixture: ComponentFixture<RentabiliteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentabiliteViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentabiliteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
