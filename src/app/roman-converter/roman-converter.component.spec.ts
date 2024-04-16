import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanConverterComponent } from './roman-converter.component';

describe('RomanConverterComponent', () => {
  let component: RomanConverterComponent;
  let fixture: ComponentFixture<RomanConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomanConverterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RomanConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
