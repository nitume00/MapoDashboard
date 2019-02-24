import { ChartDataService } from './../services/chart-data-service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class BarChartDataResolve implements Resolve<any> {
 constructor(private  chartDataService: ChartDataService){}
   resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<any> {
       return this.chartDataService.getBarChartData();
    }
}
