import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  lat:any;
  lon:any;
  currentLoc:any;
  todayDate:any;
  dailyData:any=[]
  today:any;

  formgroup!: FormGroup;
 

  constructor(private service: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.initForm();
    this.getData();
  }
  

  // initForm(){
     
  //   this.formgroup=this.fb.group({
  //     'cityname':['']
  //   })
  //   this.formgroup.get('cityname')?.valueChanges.subscribe((response:any)=>{

  //     // console.log('Current data typing: ', response)
  //     this.filterData(response) 
  //   })
  // }

  // filterData(inputData:any){
  //   this.filteredOptions=this.options.filter((item:any)=>{
  //     return item.toLowerCase().indexOf(inputData.toLowerCase()) > -1;
  //   })
  // }

  getData()
  {
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((position)=>{
        this.lat=position.coords.latitude;
        this.lon=position.coords.longitude;

        console.log('reached')

        // this.service.getWeatherDataByCity(this.lat,this.lon).subscribe(data=>{
        //   // this.options=data;
        //   // this.filteredOptions=data;
        //   console.log("Options: ", data)
        // })

        // this.service.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
        //   this.currentLoc=data;
        //   console.log("Current location", this.currentLoc)
        // })

        this.service.getForecastOneCallApi(this.lat,this.lon).subscribe(data=>{
          this.today=data
          this.dailyData=this.today['daily']
          this.todayDate=new Date(this.today['daily'][0]['dt'] * 1000);
          

          console.log("Next Forecast full data", this.today)

          console.log("Next Forecast ", this.today['daily'][0]['dt'])
        })
      })
    }
  }

}