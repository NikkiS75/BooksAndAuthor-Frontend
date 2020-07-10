import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Author} from "../../../shared/interfaces/author";
import {log} from "util";


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl = 'http://booksandauthor/api/author';
  authors: Author[];
  author: Author;



  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
    console.log(error);
    return throwError('Ошибка'); }

  getAll(): Observable <Author[]> {
    return this.http.get(`${this.baseUrl}/getall`).pipe(
      map((res) => {
        this.authors= res['data'];
        return this.authors;
      }), catchError(this.handleError));
  }

  getByID(authorID: number): Observable<Author> {
    const params = new HttpParams()
      .set('authorID', authorID.toString());
    return this.http.get(`${this.baseUrl}/getbyid`, {params: params}).pipe(
      map((res) => {
        this.author = res['data'];
        return this.author;
      }),
      catchError(this.handleError));
  }

  create(author:Author): Observable<Author[]> {
    return this.http.post(`${this.baseUrl}/add`, { data: author })
      .pipe(map((res) => {
          this.authors = this.authors || [];
          this.authors.push(res['data']);
          return this.authors;
        }),
        catchError(this.handleError));
  }

  delete(authorID: number) {
    const params = new HttpParams()
      .set('authorID', authorID.toString());
    return this.http.delete(`${this.baseUrl}/delete`, { params: params })
      .pipe(map(res => {
          const filteredAuthors = this.authors.filter((author) => {
            return author['authorID'] !== authorID;
          });
          return this.authors = filteredAuthors;
        }),
        catchError(this.handleError));
  }

  update(authorUpdated: Author) {
    return this.http.put(`${this.baseUrl}/update`, { data: authorUpdated })
  }
}
