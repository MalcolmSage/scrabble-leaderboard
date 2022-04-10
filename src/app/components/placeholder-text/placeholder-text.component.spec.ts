import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderTextComponent } from './placeholder-text.component';

describe('PlaceholderTextComponent', () => {
  let component: PlaceholderTextComponent;
  let fixture: ComponentFixture<PlaceholderTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
