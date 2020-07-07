import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {PublicPageComponent} from "./public-page/public-page.component";
import {BookPageComponent} from "./book-page/book-page.component";
import {AdminModule} from "./admin/admin.module";


const routes: Routes = [
  {path:'', component: MainLayoutComponent, children:
      [ {path: '', redirectTo: '/', pathMatch: 'full'},
        {path: '', component: PublicPageComponent},
        {path: 'book/:id', component: BookPageComponent }
        ]},
  {path: 'admin', loadChildren: ()=> AdminModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
