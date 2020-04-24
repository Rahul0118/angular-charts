import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: object[];
  public xAxis : object;
  public yAxis : object;
  public chartTitle: string;
  public chartTitle1: string;
  public chartTitle2: string;
  public legend: object;
  public markerSettings: object;
  public tooltipSettings: object;
  constructor() {
  	this.chartTitle = 'Line Analysis';
  	this.chartTitle1 = 'Bar Analysis';
  	this.chartTitle2 = 'Polar Analysis';
  	this.data = [
  		{ month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
  		{ month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
  		{ month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
  		{ month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
  		{ month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
  		{ month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
  	];
  	this.tooltipSettings = {
  		enable: true
  	}
  	this.markerSettings = {
  		visible: true,
  		dataLabel: {
  			visible: true
  		}
  	};
  	this.legend = {
  		visible: true
  	};
  	this.xAxis = {
  		title: 'Month',
  		valueType: 'Category'	
  	};
  	this.yAxis = {
  		title: 'Sales'	
  	};
  }
}
