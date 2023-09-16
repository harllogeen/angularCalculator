import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { DigitComponent } from './digit/digit.component';



@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DigitComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
