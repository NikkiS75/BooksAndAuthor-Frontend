import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ListBooksPageComponent } from './list-books-page/list-books-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { BooksEditPageComponent } from './books-edit-page/books-edit-page.component';
import {AuthorEditPageComponent} from "./author-edit-page/author-edit-page.component";
import { ListAuthorPageComponent } from './list-author-page/list-author-page.component';
import {BooksComponent} from "./shared/components/books/books.component";
import {AuthorsListComponent} from "./shared/components/authors-list/authors-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./shared/services/auth.guard";





@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    ListBooksPageComponent,
    ListAuthorPageComponent,
    CreatePageComponent,
    BooksEditPageComponent,
    AuthorEditPageComponent,
    BooksComponent,
    AuthorsListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'books', component: ListBooksPageComponent, canActivate: [AuthGuard]},
          {path: 'author-list', component: ListAuthorPageComponent, canActivate: [AuthGuard]},
          {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
          {path: 'book/:id/edit', component: BooksEditPageComponent, canActivate: [AuthGuard]},
          {path: 'author/:id/edit', component: AuthorEditPageComponent, canActivate: [AuthGuard]},

        ]
      }
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[],
  providers:[AuthGuard]

})

export class AdminModule {

}
