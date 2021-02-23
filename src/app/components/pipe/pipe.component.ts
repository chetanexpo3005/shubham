import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  title = 'angular 7 project!';
  todaydate = new Date();
  studentObj = { name: 'Rox', age: '25', address: { a1: 'Mumbai', a2: 'Karnataka' } };
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', '', '', 'Aug',
    'Sept', 'Oct', 'Nov', 'Dec'];
  constructor() { }

  ngOnInit(): void {
  }

}
