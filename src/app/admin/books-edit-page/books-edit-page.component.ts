import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-page',
  templateUrl: './books-edit-page.component.html',
  styleUrls: ['./books-edit-page.component.scss']
})
export class BooksEditPageComponent implements OnInit {

  bookEditForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.bookEditFormInit()
  }

  bookEditFormInit(){
    this.bookEditForm = new FormGroup({
      bookName: new FormControl('', Validators.required),
      bookAnnotation: new FormControl('', Validators.required),
      bookYearPublic: new FormControl('', Validators.required),
      bookNumberPages: new FormControl('', Validators.required)
    });
  }
}
