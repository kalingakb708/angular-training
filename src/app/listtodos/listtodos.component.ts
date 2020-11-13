import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
  }



@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {


  todos = [
    new Todo(1,  'learn to dance !', false, new Date()),
  new Todo(2, 'learn to dance 2', true, new Date()),
  new Todo(3, 'learn to dance 3', false, new Date()),
    new Todo(4, 'learn to dance 4', false, new Date()),

  ];


  constructor() { }

  ngOnInit() {
  }

}
