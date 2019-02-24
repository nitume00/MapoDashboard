import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { BarChartDataResolve } from './resolver/bar.chart.resolver';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [BarChartDataResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
