import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRentalItemsComponent } from './view-rental-items.component';

describe('ViewRentalItemsComponent', () => {
  let component: ViewRentalItemsComponent;
  let fixture: ComponentFixture<ViewRentalItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRentalItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRentalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
