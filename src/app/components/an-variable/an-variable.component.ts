import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-an-variable',
  templateUrl: './an-variable.component.html',
  styleUrls: ['./an-variable.component.css']
})
export class AnVariableComponent implements OnInit {

  firstName: string;
  // tslint:disable-next-line:no-inferrable-types
  middleName: string = 'Prakash';
  lastName = 'Jogi';

  cityList: string[] = ['mumbai'];

  rollNo: number;
  // tslint:disable-next-line:no-inferrable-types
  pieValue: number = 3.14;


  // tslint:disable-next-line:no-inferrable-types
  isMale: boolean = true;

  currentDate: Date;
  todayDate: Date = new Date();

  student: any;





  constructor() {
    this.currentDate = new Date();
    this.cityList = ['Nagpur', 'Pune'];
  }

  ngOnInit(): void {
    this.student = {
      name: 'Chetan Jogi',
      city: 'Nagpur',
      contactNo: '8698707388',
      family: {
        memberName: 'Ankita',
        relation: 'Wife'
      }
    };
    this.student.altNo = '99887744550';
    this.student.family.altNo = '99887744550';
    this.student.officeDetails =  {
      companyName: 'Accenture'
    };

    const fChar =  this.student.name.charAt(0);
  }

}
