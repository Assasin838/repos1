import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './sign/signup.component'; // Імпортуйте компонент реєстрації, якщо потрібно

// Налаштування маршрутів
export const routes: Routes = [
  { path: '', component: AppComponent }, // Головна сторінка
  { path: 'register', component: SignupComponent  } // Сторінка реєстрації
];
