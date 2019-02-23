import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';

import { HomePageModule } from './home-page/home-page.module';
import { AboutPageModule } from './about-page/about-page.module';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HomePageModule,
    AboutPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
