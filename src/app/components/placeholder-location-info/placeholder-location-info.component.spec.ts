import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderLocationInfoComponent } from './placeholder-location-info.component';

describe('PlaceholderLocationInfoComponent', () => {
  let component: PlaceholderLocationInfoComponent;
  let fixture: ComponentFixture<PlaceholderLocationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderLocationInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderLocationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
