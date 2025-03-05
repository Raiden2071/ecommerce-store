import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-books',
  imports: [MatCardModule],
  templateUrl: `./books.component.html`,
  styleUrl: './books.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {
  books = {
    id: '1',
    name: 'Властелин колец',
    price: 400,
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description: 'Увлекательная история про Голума'
  }
}
