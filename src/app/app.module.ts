import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule, LineSeriesService, BarSeriesService, PolarSeriesService, RangeColumnSeriesService, CategoryService, LegendService, DataLabelService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [LineSeriesService, BarSeriesService, PolarSeriesService, CategoryService, LegendService, DataLabelService, TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
