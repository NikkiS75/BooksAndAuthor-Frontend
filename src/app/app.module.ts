import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BooksTableComponent } from './shared/components/books-table/books-table.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PublicPageComponent,
    BookPageComponent,
    BooksTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
