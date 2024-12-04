import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentalItemsComponent } from './add-rental-items.component';

describe('AddRentalItemsComponent', () => {
  let component: AddRentalItemsComponent;
  let fixture: ComponentFixture<AddRentalItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRentalItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRentalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
