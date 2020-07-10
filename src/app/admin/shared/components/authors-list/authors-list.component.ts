import { Component, OnInit } from '@angular/core';

import {AuthorService} from "../../services/author.service";
import {Author} from "../../../../shared/interfaces/author";
import {Book} from "../../../../shared/interfaces/book";

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
  authors: Author[];
  error ='';

  constructor(private  authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAuthors()
  }

  getAuthors(): void {
    this.authorService.getAll().subscribe(
      (res: Author[]) => {
        this.authors = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

  deleteAuthor(authorID: number) {
    this.authorService.delete(authorID)
      .subscribe(
        (res: Author[]) => {
          this.authors = res;

        },
        (err) => this.error = err
      );
  }

  // getAuthorID(authorID: number) {
  //   this.authorService.getByID(authorID)
  //     .subscribe(
  //       (res: Author[]) => {
  //         this.authors = res;
  //
  //       },
  //       (err) => this.error = err
  //     );

  // }
}
