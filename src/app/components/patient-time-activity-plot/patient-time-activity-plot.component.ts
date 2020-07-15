import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-patient-time-activity-plot',
  templateUrl: './patient-time-activity-plot.component.html',
  styleUrls: ['./patient-time-activity-plot.component.css']
})
export class PatientTimeActivityPlotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data = [{
    name: 'ItSolutionStuff.com',
    data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
  }, {
    name: 'Nicesnippets.com',
    data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
  }];

  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: "spline",
      zoomType: 'x'
    },
    title: {
      text: "" // No title
    },
    subtitle: {
      text: document.ontouchstart === undefined ?
        'Click and drag in the plot area to zoom in' :
        'Pinch the chart to zoom in'
    },
    xAxis: {
      title: {
        text: document.ontouchstart === undefined ?
          'Date' :
          ''
      },
      categories: ["02/07/20", "03/07/20", "04/07/20", "05/07/20", "06/07/20", "07/07/20", "08/07/20", "09/07/20", "10/07/20", "11/07/20", "12/07/20", "13/07/20"]
    },
    yAxis: {
      title: {
        text: document.ontouchstart === undefined ?
          'Time' :
          ''
      },
    },
    series: this.data
  };
}
