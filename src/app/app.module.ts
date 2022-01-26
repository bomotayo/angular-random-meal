import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [AppComponent, MealComponent, SafePipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
