import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-st-crud',
  templateUrl: './local-st-crud.component.html',
  styleUrls: ['./local-st-crud.component.css']
})
export class LocalStCrudComponent implements OnInit {


  isLoader: boolean;
  iEmployee: Employee;
  iEmployeeColl: Employee[];
  iEmployeeCollTemp: Employee[];
  search: string;
  constructor() {
    this.isLoader = true;
    this.initModel();
    this.iEmployeeColl = [];
    this.iEmployeeCollTemp = [];
  }

  initModel() {
    this.iEmployee = {
      about: '',
      certificationName: '',
      compnay: '',
      coreExpertise: '',
      designation: '',
      fName: '',
      id: 0,
      isCertification: false,
      lName: '',
      rating: null,
      technology: ''
    };
  }

  ngOnInit() {
    this.loadGrid();
  }
  loadGrid() {
    const fromStorage = JSON.parse(localStorage.getItem('empData'));
    if (fromStorage !== null) {
      setTimeout(() => {
        debugger;
        this.isLoader = false;
        this.iEmployeeColl = fromStorage;
        setTimeout(() => {
          const text2 = document.getElementById('tdName').innerHTML;
          console.log(text2);
        }, 2000);
      }, 4000);
    }
  }
  getNewId() {
    return this.iEmployeeColl.length + 1;
  }
  addEmployee() {
    const oldData = this.getOldData();
    this.iEmployee.id = this.getNewId();
    if (oldData === null) {
      const data = [
        this.iEmployee
      ];
      localStorage.setItem('empData', JSON.stringify(data));
    } else {
      this.iEmployeeCollTemp = oldData;
      this.iEmployeeCollTemp.push(this.iEmployee);
      localStorage.setItem('empData', JSON.stringify(this.iEmployeeCollTemp));
      this.iEmployeeCollTemp = [];
    }
    this.initModel();
    this.loadGrid();
  }

  filterByValue() {
    debugger;
    this.iEmployeeCollTemp = this.getOldData();
    const data2 = this.iEmployeeCollTemp.filter((data) => JSON.stringify(data).toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
    if (data2 !== null && data2 !== undefined) {
      this.iEmployeeColl = [];
      this.iEmployeeColl = data2;
    }
  }
  changeFun() {
    console.log('change')
  }
  getRecordForEdit(id) {
    this.initModel();
    const oldData = this.getOldData();
    if (oldData !== null) {
      this.iEmployeeCollTemp = oldData;
      this.iEmployee = this.iEmployeeCollTemp.find(m => m.id === id);
    }
  }
  getOldData() {
    return JSON.parse(localStorage.getItem('empData'));
  }
  updateEmployee() {
    const oldData = this.getOldData();
    if (oldData !== null) {
      this.iEmployeeCollTemp = oldData;
      for (let i = 0; i < this.iEmployeeCollTemp.length; i++) {
        if (this.iEmployeeCollTemp[i].id === this.iEmployee.id) {
          this.iEmployeeCollTemp.splice(i, 1);
        }
      }
      this.iEmployeeCollTemp.push(this.iEmployee);
      localStorage.setItem('empData', JSON.stringify(this.iEmployeeCollTemp));
      this.loadGrid();
      this.iEmployeeCollTemp = [];
      this.initModel();
    }
  }
  deleteEmployee(item: Employee) {
    const oldData = this.getOldData();
    if (oldData !== null) {
      this.iEmployeeCollTemp = oldData;
      for (let i = 0; i < this.iEmployeeCollTemp.length; i++) {
        if (this.iEmployeeCollTemp[i].id === item.id) {
          this.iEmployeeCollTemp.splice(i, 1);
        }
      }
      localStorage.setItem('empData', JSON.stringify(this.iEmployeeCollTemp));
      this.initModel();
      this.loadGrid();
    }
  }
  getExpertise(rating) {
    if (rating <= 3) {
      return 'Beginner';
    }
    else if (rating > 3 && rating < 6) {
      return 'Medium';
    }
    else if (rating >= 6 && rating < 8) {
      return 'Senior';
    }
    else if (rating >= 8) {
      return 'Expert';
    }
  }
  getColorBYRating(rating) {
    if (rating >= 8) {
      return { 'background-color': 'green', 'color': '#ffff' };
    }
  }
  getClassBYRating(rating) {
    if (rating >= 8) {
      return { 'background-color': 'green', 'color': '#ffff' };
    }
  }
}

export interface Employee {
  about: string;
  certificationName: string;
  compnay: string;
  coreExpertise: string;
  designation: string;
  fName: string;
  id: number;
  isCertification: boolean;
  lName: string;
  rating: number;
  technology: string;
}
