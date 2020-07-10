import { Component, OnInit } from '@angular/core';
import {Book} from "../../../../shared/interfaces/book";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[];
  error = '';
  success = '';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks(): void {
    this.bookService.getAll().subscribe(
      (res: Book[]) => {
        this.books = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deleteBook(bookID: number) {

    this.bookService.delete(bookID)
      .subscribe(
        (res: Book[]) => {
          this.books = res;
          this.success = 'Deleted successfully';
        },
        (err) => this.error = err
      );
  }
}
