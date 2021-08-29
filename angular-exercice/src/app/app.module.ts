import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './core/app.component';
import { UtilisateurComponent } from './exercice2/utilisateur.component';
import { ImagesComponent } from './exercice3/images.component';
import { TodoListComponent } from './exercice4/todo-list.component';
import { InOutComponent } from './exercice5/in-out.component';
import { ArticleComponent } from './exercice5/article/article.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    ImagesComponent,
    TodoListComponent,
    InOutComponent,
    ArticleComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
