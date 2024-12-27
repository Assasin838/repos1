import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone:true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports:[RouterModule, RouterOutlet]
})
export class AppComponent {
    email: string = '';
    password: string = '';

    login(): void {
        if (this.email && this.password) {
            console.log('Вхід виконано з email:', this.email);
            // Додайте тут логіку для авторизації
        } else {
            alert('Будь ласка, заповніть усі поля.');
        }
    }
}


