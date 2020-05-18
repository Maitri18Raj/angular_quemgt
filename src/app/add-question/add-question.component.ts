import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/questionservice';
import { Question } from '../model/question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  service:QuestionService;

  constructor(service:QuestionService) {
    this.service=service;
   }

  ngOnInit(): void {
  }

  addedQuestion=null;

  addQuestion(form:any){
    let details=form.value;
    let testId=details.testId;
    let questionTitle=details.questionTitle;
    this.addedQuestion=new Question();
    this.addedQuestion.testId=testId;
    this.addedQuestion.questionTitle=questionTitle;

    let result=this.service.addQuestion(this.addedQuestion);
    result.subscribe((question:Question)=>{
      this.addedQuestion=question;
    },
    err=>{
      console.log("err="+err);
    });
    form.reset();
  }
}
