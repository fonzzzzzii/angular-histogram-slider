import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HistogramSliderComponent } from './components/histogram-slider/histogram-slider.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HistogramSliderComponent, HistogramSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-histogram-slider';
}
