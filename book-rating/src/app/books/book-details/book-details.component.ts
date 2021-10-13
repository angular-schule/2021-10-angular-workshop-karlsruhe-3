import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, mergeMap, share, shareReplay, switchMap } from 'rxjs/operators';
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
    shareReplay(1)
  )

  constructor(private route: ActivatedRoute, private bs: BooksService) {

  }
}
