import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-author-edit-page',
  templateUrl: './author-edit-page.component.html',
  styleUrls: ['./author-edit-page.component.scss']
})
export class AuthorEditPageComponent implements OnInit {

  authorEditForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.authorEditFormInit()
  }


  authorEditFormInit(){
    this.authorEditForm = new FormGroup({
      authorName: new FormControl('', Validators.required),
      authorSurname: new FormControl('', Validators.required),
    });
  }
}
