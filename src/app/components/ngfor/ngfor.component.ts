import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  cityList: string[];
  stateList: string[];
  city: string;
  constructor() {
    this.cityList = ['Nagpur', 'Pune', 'Mumbai', '', 'Warora'];
    this.stateList = ['Mah', 'Mp', 'Goa', 'Guj'];
    this.city = '';
   }

  ngOnInit(): void {
  }
  addCity() {
    this.cityList.push(this.city);
  }
  remove() {
    this.cityList.pop();
  }
  getCityList(){
    return this.cityList;
  }

}
