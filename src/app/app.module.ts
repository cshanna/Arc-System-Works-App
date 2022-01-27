import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselComponent } from './navigation/carousel.component';
import { CategoryNavBarComponent } from './navigation/categorynavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryNavBarComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
