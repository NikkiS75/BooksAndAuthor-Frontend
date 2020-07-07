import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  bookForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.bookFormInit()
  }

  bookFormInit(){
    this.bookForm = new FormGroup({
      bookName: new FormControl('', Validators.required),
      authorName: new FormControl('', Validators.required),
      authorSurname: new FormControl('', Validators.required),
      bookAnnotation: new FormControl('', Validators.required),
      bookYearPublic: new FormControl('', Validators.required),
      bookNumberPages: new FormControl('', Validators.required)
    });
  }




}
