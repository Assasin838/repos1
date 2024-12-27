import { Component } from '@angular/core';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css'],
})
export class BidComponent {
  onSubmit() {
    console.log('Форма відправлена!');
    // Логіка для обробки даних форми
  }

  onCancel() {
    console.log('Форма скасована!');
    // Логіка для скасування форми
  }
}
