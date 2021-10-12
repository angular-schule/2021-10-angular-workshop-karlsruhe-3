import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: '**', redirectTo: '/books/99999999999999999' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    scrollPositionRestoration: 'top' // TODO: enabled when possible
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
