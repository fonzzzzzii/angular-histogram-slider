import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistogramSliderComponent } from './histogram-slider.component';

describe('HistogramSliderComponent', () => {
  let component: HistogramSliderComponent;
  let fixture: ComponentFixture<HistogramSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistogramSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistogramSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
