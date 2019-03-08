import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';

import { HomePageModule } from './home-page/home-page.module';
import { AboutPageModule } from './about-page/about-page.module';
import { CountriesPageModule } from './countries-page/countries-page.module';
import { NotFoundPageModule } from './not-found-page/not-found-page.module';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HomePageModule,
    AboutPageModule,
    CountriesPageModule,
    NotFoundPageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
