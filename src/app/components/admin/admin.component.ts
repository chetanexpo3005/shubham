import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  rollNo: number;
  firstName: string;
  currentDate: Date;
  isIndian: boolean;

  cityList: string[];
  rollNoList: number[];
  heading: string;
  student: any;
  min: number;
  constructor() {
    this.firstName = 'Hello';
    this.min = 9;
    this.rollNo = 1223;
    this.student =  {
      name: 'Chetan',
      city: 'Ngp'
    };
    this.heading = '<h1>Hello h1</h1> <br><p>Hello p</p>';
    this.currentDate = new Date();
  }

  ngOnInit(): void {

  }

}
