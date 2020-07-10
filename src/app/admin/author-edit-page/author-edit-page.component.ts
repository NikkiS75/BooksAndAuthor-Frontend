import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {AuthorService} from "../shared/services/author.service";
import {switchMap} from "rxjs/operators";
import {Author} from "../../shared/interfaces/author";

@Component({
  selector: 'app-author-edit-page',
  templateUrl: './author-edit-page.component.html',
  styleUrls: ['./author-edit-page.component.scss']
})
export class AuthorEditPageComponent implements OnInit {

  authorEditForm:FormGroup;
  author: Author;
  authorID: number;
  message: string;

  constructor(private route:ActivatedRoute,
              private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorByID()
  }

  authorByID(){
    this.route.params.pipe(
      switchMap((params:Params) =>{
     return this.authorService.getByID(params['id'])
    })
    ).subscribe((author:Author) => {
      this.authorEditForm = new FormGroup({
        authorName: new FormControl(author.authorName, Validators.required),
        authorSurname: new FormControl(author.authorSurname, Validators.required)
      })
      this.authorID = author.authorID
    })
  }

  updateAuthor(form:FormGroup){
    const authorUpdated: Author = {
      authorName: form.value.authorName,
      authorSurname:form.value.authorSurname,
      authorID: this.authorID
    }
    this.authorService.update(authorUpdated)
      .subscribe(() => this.message = "Данные успешно изменены");
  }

}
