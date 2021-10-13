import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BookRatingService } from '../shared/book-rating.service';
import { Book, BooksService } from '../shared/http';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // VORSICHT BUG: defekt sobald wir AJAX machen
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(private br: BookRatingService, private bs: BooksService) {
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    // const ratedBook = {
    //   ...book,
    //   rating: Math.max(book.rating - 1, 5)
    // };
    this.updateAndSortBooks(ratedBook);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    this.updateAndSortBooks(ratedBook);
  }

  updateAndSortBooks(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating! - a.rating!);
  }

  addBook(newBook: Book): void {
    this.books = [...this.books, newBook];
  }
}
