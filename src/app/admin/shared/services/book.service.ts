import { Injectable } from '@angular/core';
import {Book} from "../../../shared/interfaces/book";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Author} from "../../../shared/interfaces/author";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://booksandauthor/api/book';
  books: Book[];
  book: Book;



  constructor(private http: HttpClient) { }

  getAll(): Observable <Book[]> {
    return this.http.get(`${this.baseUrl}/getall`).pipe(
      map((res) => {
        this.books = res['data'];
        return this.books;
      }), catchError(this.handleError));
}
  create(book:Book): Observable<Book[]> {
    return this.http.post(`${this.baseUrl}/add`, {data: book })
      .pipe(map((res) => {
          this.books = this.books || [];
          this.books.push(res['data']);
          return this.books;
        }),
        catchError(this.handleError));
  }

  delete(bookID: number) {
    const params = new HttpParams()
      .set('bookID', bookID.toString());
    return this.http.delete(`${this.baseUrl}/delete`, { params: params })
      .pipe(map(res => {
          const filteredBooks = this.books.filter((book) => {
            return book['bookID'] !== bookID;
          });
          return this.books = filteredBooks;
        }),
        catchError(this.handleError));

  }

  getByID(bookID: number): Observable<Book> {
    const params = new HttpParams()
      .set('bookID', bookID.toString());
    return this.http.get(`${this.baseUrl}/getbyid`, {params: params}).pipe(
      map((res) => {
        this.book = res['data'];
        return this.book;
      }),
      catchError(this.handleError));
  }

  update(bookUpdated: Book) {
    return this.http.put(`${this.baseUrl}/update`, { data: bookUpdated})
  }

  private handleError(error: HttpErrorResponse){
    console.log(error);
    return throwError('Ошибка'); }

}

