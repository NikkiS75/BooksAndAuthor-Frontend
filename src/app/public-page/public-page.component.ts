import { Component, OnInit } from '@angular/core';
import {BookService} from "../admin/shared/services/book.service";
import {Observable} from "rxjs";
import {Book} from "../shared/interfaces/book";

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.books$ = this.bookService.getAll()

  }

}
