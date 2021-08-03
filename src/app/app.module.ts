import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from './modules/materials/materials.module';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    AreaChartComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialsModule,
    HighchartsChartModule,
    HttpClientModule,
    GooglePlaceModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
