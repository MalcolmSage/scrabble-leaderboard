import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderContactInfoComponent } from './placeholder-contact-info.component';

describe('PlaceholderContactInfoComponent', () => {
  let component: PlaceholderContactInfoComponent;
  let fixture: ComponentFixture<PlaceholderContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderContactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
