import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../shared/interfaces/book";
import {Author} from "../../shared/interfaces/author";
import {AuthorService} from "../shared/services/author.service";
import {BookService} from "../shared/services/book.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  bookForm: FormGroup;
  error = '';
  success = '';
  authors: Author[];
  books: Book[];
  createdAuthor: Author;



  constructor( private  authorService: AuthorService, private  bookService: BookService) { }

  ngOnInit(): void {
    this.bookForm = this.bookFormInit()

  }

  bookFormInit(): FormGroup{
    return this.bookForm = new FormGroup({
      bookName: new FormControl('', Validators.required),
      authorForm: new FormGroup({
        authorName: new FormControl('', Validators.required),
        authorSurname: new FormControl('', Validators.required)}),
      bookAnnotation: new FormControl('', Validators.required),
      bookYearPublic: new FormControl('', Validators.required),
      bookNumberPages: new FormControl('', Validators.required)
    });
  }


  addAuthor(form: FormGroup) {
    const author: Author = {
      authorName: form.controls['authorForm'].value.authorName,
      authorSurname: form.controls['authorForm'].value.authorSurname,
    }

     this.authorService.create(author)
       .subscribe(
         (res: Author[]) => {
           this.authors = res;
           this.createdAuthor = this.authors.find(authorItem => authorItem.authorSurname == author.authorSurname)
           this.addBook(form,this.createdAuthor)
           form.reset();
         },
      (err) => this.error = err
    );
  }

  addBook(form: FormGroup, createdAuthor: Author) {
    const book: Book = {
      bookName: form.value.bookName,
      bookAnnotation: form.value.bookAnnotation,
      yearPublic: form.value.bookYearPublic,
      numberPages: form.value.bookNumberPages,
      authorID: createdAuthor.authorID
    }

    this.bookService.create(book)
      .subscribe(
        (res: Book[]) => {
          this.books = res;
          this.success = 'Created successfully';
          form.reset();
        },
        (err) => this.error = err
      );

  }
  submit(){
    this.addAuthor(this.bookForm)
  }



}
