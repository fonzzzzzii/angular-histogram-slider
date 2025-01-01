import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-histogram-slider',
  imports: [MatSliderModule],

  templateUrl: './histogram-slider.component.html',
  styleUrl: './histogram-slider.component.scss',
})
export class HistogramSliderComponent implements OnInit {
  public chart: any;

  width = 500;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', // this denotes the type of chart

      data: {
        // values on X-Axis
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
          '2022-05-17',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [
              '10',
              '20',
              '40',
              '80',
              '150',
              '300',
              '450',
              '600',
              '750',
              '850',
              '900',
              '950',
              '1000',
              '950',
              '900',
              '850',
              '750',
              '600',
              '450',
              '300',
              '150',
              '80',
              '40',
              '20',
              '10',
            ],
            backgroundColor: 'blue',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false, // Hides the X-axis
          },
          y: {
            display: false, // Hides the Y-axis
          },
        },
        plugins: {
          legend: {
            display: false, // Hides the legend
          },
        },
      },
    });
  }
}
