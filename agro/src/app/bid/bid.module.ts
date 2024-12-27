import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Для використання ngModel
import { AppComponent } from './app.component';
import { BidComponent } from './bid/bid.component'; // Імпорт компонента

@NgModule({
  declarations: [
    AppComponent,
    BidComponent // Додаємо компонент у декларації
  ],
  imports: [
    BrowserModule,
    FormsModule // Імпортуємо FormsModule для роботи з формами
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
