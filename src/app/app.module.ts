import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { RemoveQuestionComponent } from './remove-question/remove-question.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    RemoveQuestionComponent,
    UpdateQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
