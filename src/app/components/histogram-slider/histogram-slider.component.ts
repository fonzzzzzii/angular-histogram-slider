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

  firstPickerStartingPoint = 0;
  firstPicker = 0;
  secondPickerStartingPoint = 0;
  secondPicker = 0;

  width = 500;

  data: any = [
    { val: 0, qty: 30 },
    { val: 10, qty: 1 },
    { val: 20, qty: 2 },
    { val: 30, qty: 3 },
    { val: 40, qty: 4 },
    { val: 50, qty: 5 },
    { val: 60, qty: 6 },
    { val: 70, qty: 7 },
    { val: 80, qty: 8 },
    { val: 90, qty: 9 },
    { val: 100, qty: 10 },
    { val: 110, qty: 11 },
    { val: 120, qty: 11 },
    { val: 130, qty: 10 },
    { val: 140, qty: 9 },
    { val: 150, qty: 8 },
    { val: 160, qty: 7 },
    { val: 170, qty: 6 },
    { val: 180, qty: 5 },
    { val: 190, qty: 4 },
    { val: 200, qty: 3 },
    { val: 210, qty: 2 },
    { val: 220, qty: 1 },
    { val: 230, qty: 0 },
    { val: 240, qty: 0 },
    { val: 250, qty: 1 },
    { val: 260, qty: 2 },
    { val: 270, qty: 3 },
    { val: 280, qty: 4 },
    { val: 290, qty: 5 },
    { val: 300, qty: 6 },
    { val: 310, qty: 7 },
    { val: 320, qty: 8 },
    { val: 330, qty: 9 },
    { val: 340, qty: 10 },
    { val: 350, qty: 11 },
    { val: 360, qty: 11 },
    { val: 370, qty: 10 },
    { val: 380, qty: 9 },
    { val: 390, qty: 8 },
    { val: 400, qty: 7 },
  ];

  lightColor = 'rgb(0, 0, 0, .05)';
  darkColor = 'rgb(135, 171, 255)';

  dataColors: string[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.dataColors);
    this.createChart();

    this.firstPicker = this.firstPickerStartingPoint = this.getDataMinVal();
    this.secondPicker = this.secondPickerStartingPoint = this.getDataMaxVal();
    this.updateDataColors();
  }

  getDataQty() {
    return this.data.map((item: any) => item.qty);
  }

  getLabels() {
    // returns an array of of "" labels
    return this.data.map((item: any) => '');
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', // this denotes the type of chart

      data: {
        // values on X-Axis
        labels: this.getLabels(),
        datasets: [
          {
            label: 'Sales',
            data: this.getDataQty(),
            backgroundColor: this.dataColors,
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
          tooltip: {
            enabled: false, // Disable the tooltip
          },
        },
      },
    });
  }

  getDataMaxVal() {
    return Math.max(...this.data.map((item: any) => item.val));
  }

  getDataMinVal() {
    return Math.min(...this.data.map((item: any) => item.val));
  }

  getDataStep() {
    const step =
      (this.getDataMaxVal() - this.getDataMinVal()) / (this.data.length - 1);
    console.log('step', step);
    return step;
  }

  updateDataColors() {
    this.dataColors = [];
    for (let i = 0; i < this.data.length; i++) {
      if (
        this.firstPicker <= this.data[i].val &&
        this.secondPicker >= this.data[i].val
      ) {
        this.dataColors.push(this.darkColor);
      } else {
        this.dataColors.push(this.lightColor);
      }
    }

    // Apply updated colors to the chart's dataset
    if (this.chart) {
      this.chart.data.datasets[0].backgroundColor = this.dataColors;
      this.chart.update(); // Re-render the chart
    }
  }

  firstPickerChanged(event: any) {
    this.firstPicker = event.target.value;
    this.updateDataColors();
  }

  secondPickerChanged(event: any) {
    this.secondPicker = event.target.value;
    this.updateDataColors();
  }
}
