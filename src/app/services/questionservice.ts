import { Injectable } from "@angular/core";
import { AddQuestionComponent } from '../add-question/add-question.component';

@Injectable()
export class QuestionService{
client:HttpClient;
constructor(client:HttpClient){
this.client=client;
}
    baseQuestionUrl="";
}

addQuestion()