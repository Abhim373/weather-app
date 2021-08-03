import { Component } from '@angular/core';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'weather-app';
  formattedaddress="";

  options={
    types: ['address'],
    componentRestrictions: {
      country: ["AU"]
    }
  } as unknown as Options;
  
  public AddressChange(address: any) {
    //setting address from API to local variable
    console.log('Places address: ',address)
    this.formattedaddress=address.formatted_address
  }
}
