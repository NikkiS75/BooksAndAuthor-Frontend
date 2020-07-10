import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../../../admin/shared/services/book.service";
import {Observable} from "rxjs";
import {Book} from "../../interfaces/book";

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent implements OnInit {

  @Input()books: Book[]

  constructor() { }

  ngOnInit(): void {

  }


}
