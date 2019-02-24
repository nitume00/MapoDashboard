import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BarChart } from '../model/barChart';




@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private httpClient: HttpClient) { }

    getBarChartData(){
     return  this.httpClient.get<[]>(environment.apiBase + 'bar');
    }

}
