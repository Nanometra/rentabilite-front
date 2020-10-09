import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRentabiliteComponent } from './detail-rentabilite.component';

describe('DetailRentabiliteComponent', () => {
  let component: DetailRentabiliteComponent;
  let fixture: ComponentFixture<DetailRentabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRentabiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRentabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
