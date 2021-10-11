import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent  {

  bookForm = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl()
  });

  isInvalid(path: string): boolean {
    const control = this.bookForm.get(path);
    return !!control && control.touched && control.invalid;
  }

  // TODO: implement hasError('isbn', 'minlength')

  submitForm(): void {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    // Hands On!
    // 1. Erstelle ein Event mit dem Namen "create"
    // 2. Sende das neue Buch per Event
    // 3. Susbcribe dich auf das Event in der Dashboard C.
    // 4. Füge das neue Buch dem Array hinzu

    this.bookForm.reset();
  }
}
