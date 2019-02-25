import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartDataResolve } from './resolver/bar.chart.resolver';

const routes: Routes = [
    {path: 'bar-chart', component: BarChartComponent},
    {path: 'pie-chart', component: PieChartComponent},
    {path: '**', component: BarChartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
