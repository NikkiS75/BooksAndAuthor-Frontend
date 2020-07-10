import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, Params} from "@angular/router";
import {Author} from "../../shared/interfaces/author";
import {BookService} from "../shared/services/book.service";
import {Book} from "../../shared/interfaces/book";

@Component({
  selector: 'app-edit-page',
  templateUrl: './books-edit-page.component.html',
  styleUrls: ['./books-edit-page.component.scss']
})
export class BooksEditPageComponent implements OnInit {

  bookEditForm: FormGroup;
  bookID: number;
  message: string;

  constructor(private route: ActivatedRoute,
              private bookService: BookService) {}

  ngOnInit(): void {
    this.bookByID()
  }


  bookByID(){
    this.route.params.pipe(
      switchMap((params:Params) =>{
        return this.bookService.getByID(params['id'])
      })
    ).subscribe((book:Book) => {
      this.bookEditForm = new FormGroup({
        bookName: new FormControl(book.bookName, Validators.required),
        bookAnnotation: new FormControl(book.bookAnnotation, Validators.required),
        bookYearPublic: new FormControl(book.yearPublic, Validators.required),
        bookNumberPages: new FormControl(book.numberPages, Validators.required)
      })
      this.bookID = book.bookID
    })
  }

  updateBook(form:FormGroup){
    const bookUpdated: Book = {
      bookName:form.value.bookName,
      bookAnnotation:form.value.bookAnnotation,
      yearPublic: form.value.bookYearPublic,
      numberPages: form.value.bookNumberPages,
      bookID: this.bookID
    }
    this.bookService.update(bookUpdated)
      .subscribe(() => this.message = "Данные успешно изменены");
  }



}
