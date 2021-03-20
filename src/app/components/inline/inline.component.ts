import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {


  student: Student = new Student();
  StudentList: Student[];
  oldObj: any;
  searchVal: string;

  constructor() {
    this.StudentList = [
      { 'StudentId': 1, 'Name': 'Sehwag', 'Contact': '9988556633', 'City': 'Indore', 'State': 'Mp' },
      { 'StudentId': 2, 'Name': 'Adi', 'Contact': '9988774455', 'City': 'Bhopal', 'State': 'Mp' },
      { 'StudentId': 3, 'Name': 'Purva', 'Contact': '9988774455', 'City': 'Pune', 'State': 'Mah' },
      { 'StudentId': 4, 'Name': 'Ankita', 'Contact': '9834312175', 'City': 'Pune', 'State': 'Mah' },
      { 'StudentId': 5, 'Name': 'Chetan', 'Contact': '8698707388', 'City': 'Nagpur', 'State': 'Mah' }
    ];
  }



  ngOnInit(): void {
    this.StudentList.forEach(element => {
      element['isEdit'] = false;
    });
  }

  Add() {
    this.student['isEdit'] = true;
    this.StudentList.unshift(this.student);
  }
  Edit(item) {
    // const studObj = this.StudentList.find(m => m.StudentId === item);
    // if (studObj !== undefined) {
    //   this.student = studObj;
    // }
    item.isEdit = true;
    this.oldObj = JSON.stringify(item);
  }
  Delete(item) {
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.StudentList.length; index++) {
      if (this.StudentList[index].StudentId === item.StudentId) {
        this.StudentList.splice(index, 1);
      }
    }
  }
  Update(item) {
    item.isEdit = false;
  }
  Cancel(item) {
    if (this.oldObj !== undefined) {
      const oldObj = JSON.parse(this.oldObj);
      if (oldObj !== undefined) {
        item.isEdit = false;
        item.Name = oldObj.Name;
        item.Contact = oldObj.Contact;
        item.State = oldObj.State;
        item.City = oldObj.City;
      }
    } else {
      this.StudentList.shift();
    }
  }
  Save() {
    this.StudentList.unshift(this.student);
    this.student = new Student();
  }
  validate(item) {
    if (item.Name !== '' && item.Contact !== '' && item.State !== '' && item.City !== '') {
      if (!!this.oldObj && JSON.stringify(item)  === this.oldObj) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}


export class Student {
  StudentId: number;
  Name: string;
  Contact: string;
  City: string;
  State: string;
}
