import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../shared/interfaces/book";
import {ActivatedRoute, Params} from "@angular/router";
import {BookService} from "../admin/shared/services/book.service";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {

  book$: Observable<Book>

  constructor(private route:ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.getBook()
  }

  getBook(){
    this.book$ = this.route.params.pipe(
      switchMap((params: Params )=> {
      return this.bookService.getByID(params['id'])
      })
    )
  }

}
