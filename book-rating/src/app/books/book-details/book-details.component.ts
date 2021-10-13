import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, share, shareReplay, switchMap } from 'rxjs/operators';
import { BooksService } from '../shared/http';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    switchMap(isbn => this.bs.booksIsbnGet(isbn!)),
    catchError((err: HttpErrorResponse) => of({
      title: 'ERROR',
      rating: 0,
      description: err.message
    }))
    // shareReplay(1)
  )

  constructor(private route: ActivatedRoute, private bs: BooksService) {

  }
}
