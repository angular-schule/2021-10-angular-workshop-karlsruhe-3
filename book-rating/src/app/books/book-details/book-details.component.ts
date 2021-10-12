import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  isbn?: string;

  constructor(private route: ActivatedRoute) {

    this.isbn = this.route.snapshot.paramMap.get('isbn')!;

  }


}
