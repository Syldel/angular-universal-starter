import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesPageRoutingModule } from './countries-page-routing.module';
import { CountriesPageComponent } from './countries-page.component';

@NgModule({
  declarations: [CountriesPageComponent],
  imports: [
    CommonModule,
    CountriesPageRoutingModule
  ]
})
export class CountriesPageModule { }
