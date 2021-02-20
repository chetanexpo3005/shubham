import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  studentList: any[];
  constructor() {
    this.studentList = [
      {Name: 'AAA', city: 'Nagp', Attendance: 20},
      {Name: 'bb', city: 'Nagp', Attendance: 30},
      {Name: 'cc', city: 'Nagp', Attendance: 50},
      {Name: 'dd', city: 'Nagp', Attendance: 70},
      {Name: 'ee', city: 'Nagp', Attendance: 80},
      {Name: 'ff', city: 'Nagp', Attendance: 100}


    ];
  }

  ngOnInit(): void {
  }

}
