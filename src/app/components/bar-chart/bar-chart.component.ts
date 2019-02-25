import { ChartDataService } from './../../services/chart-data-service';
import { BarChart } from './../../model/barChart';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  providers:[ChartDataService]
})
export class BarChartComponent implements OnInit {

  @ViewChild("baseChart") chart: BaseChartDirective;

  constructor(private barchartService:ChartDataService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  public barChartType = 'bar';
  public barChartLegend = true;
  //public barChartData:any [];

  public barChartData  = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27], label: 'Series B'}

  ];

  ngOnInit() {
      /*this.barchartService.getBarChartData().subscribe(
        data => this.barChartData = data,
        err => console.error(err),
        () => console.log('done loading bar chart data')
      );
      //this.drawChart();*/
    }

   }
