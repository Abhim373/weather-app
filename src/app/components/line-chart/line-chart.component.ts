import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import * as moment from 'moment';
import * as moment from 'moment-timezone';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  Highcharts=Highcharts;
  chartOptions={};
  chartData:any[24]=[];
  today:any;
  lat:any;
  lon:any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.getData();
   this.updateChart(this.chartData);
   
}

  updateChart(data:any[])
  {
    console.log("Timezone", moment.tz.guess())
      this.chartOptions={
        rangeSelector: {
          selected: 1
      },

      title: {
          text: ''
      },
      time: {
        timezone:  moment.tz.guess()
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { 
          hour: '%I %p',
      },
      
        gridLineWidth: 1,
        lineWidth: 0
      },
      yAxis: {
          title: {
            text: null
          },
          gridLineWidth: 0,
          lineWidth: 0
          
      },
      credits:{
        enabled:false
      },
      legend:{
        enabled:false
      },

      series: [{
        name:'',
          data: 
          this.chartData,
          marker: {
              enabled: true,
              radius: 3
          },
          shadow: true,
          tooltip: {
              valueDecimals: 2
          },
          pointStart: moment(),
          pointInterval: 3600 * 1000 
      }]
  }
  }
  getData(){

    if("geolocation" in navigator){
        navigator.geolocation.watchPosition((position)=>{ 
            this.lat=position.coords.latitude;
            this.lon=position.coords.longitude;

            this.dataService.getForecastOneCallApi(this.lat,this.lon).subscribe(data=>{
              this.chartData=data
              this.chartData=this.chartData.hourly.map((item:any)=>Number(item.temp))

              console.log("Next chartdata", this.chartData)

              this.updateChart(this.chartData);
              
              
      })
    })
  }
}

}
