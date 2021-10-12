import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { ApiModule, Configuration } from './books/shared/http';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { BookComponent } from './books/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BooksModule,
    HttpClientModule,
    ApiModule.forRoot(() => new Configuration({
      basePath: 'https://api.angular.schule'
    })),
    // LastAppRoutingModule (mit CatchAll drinne) ODER
    // RouterModule.forChild([{ path: '**', component: NotFoundComponent }])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
