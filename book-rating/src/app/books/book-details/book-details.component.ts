import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { BooksService } from '../shared/http';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    map(isbn => this.bs.booksIsbnGet(isbn!  ))
  )

  constructor(private route: ActivatedRoute, private bs: BooksService) {

    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      map(isbn => this.bs.booksIsbnGet(isbn!  ))
    ).subscribe(obs$ => obs$.subscribe(book => console.log(book)))

  }
}
