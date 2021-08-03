import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const material=[
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: [material ],
  exports:[material]
})
export class MaterialsModule { }
