import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import * as moment from 'moment';
import * as moment from 'moment-timezone';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

  Highcharts=Highcharts;
  chartOptions={};
  sunrise:any;
  sunset:any;
  chartData:any=[];
  today:any;
  lat:any;
  lon:any;
  currentTime:any;

  constructor(private dataService : DataService, private dp:DatePipe) { }

  ngOnInit(): void {
    this.getData();
    this.updateChart(this.sunrise,this.sunset);
        
 
  }
  updateChart(rise: any, set: any)
  {
    this.currentTime=this.dp.transform(Date.now(),'HH:mm');
    console.log('Current time:' , this.currentTime)

    this.chartOptions={
        chart: {
            type: 'spline'
        },
        title: {
            text: ''
        },
        time:
        {
            timezone:moment.tz.guess()
                 },
        xAxis: {
          gridLineWidth: 0,
          type: 'datetime',
          dateTimeLabelFormats: {
              hour: '%I %p',
          }
        },
        yAxis: {
            title: {
                text: null
              },
            gridLineWidth: 0,
        },
        legend:{
            enabled:false
          },
        // tooltip: {
        //     pointFormat: 'Current temperature at time {point.x} is {point.y}'
        // },
        credits:{
          enabled:false
        },
        
  
        plotOptions: {
            area: {
                marker: {
                    enabled: true,
                    symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            },
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'USA',
            data: [{x:1, y:0}, {
              x:2,
                y: 26.5,
                marker: {
                    symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                }
            }, {x:3, y:0}],
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
              this.sunrise=new Date((this.chartData.current.sunrise*1000));
              this.sunset=new Date(this.chartData.current.sunset*1000);
              this.sunrise= this.dp.transform(this.sunrise, 'HH:mm a');
              this.sunset= this.dp.transform(this.sunset, 'HH:mm a');


              console.log("Sunrise", this.sunrise,"Sunset ", this.sunset)

              this.updateChart(this.sunrise,this.sunset);
              // return this.chartData
              
      })
    })
  }
}

}
