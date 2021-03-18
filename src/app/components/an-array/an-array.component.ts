import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-an-array',
  templateUrl: './an-array.component.html',
  styleUrls: ['./an-array.component.css']
})
export class AnArrayComponent implements OnInit {
  city: string;
  cityArray: string[];
  output: string;

  cityList: any;
  stateList: any;
  stateCityList: any;
  constructor() {
    this.cityArray = [];
    this.stateCityList = [];
    this.cityList = [
      {
        cityId: 1,
        stateId: 1,
        cityName: 'Nagpur'
      },
      {
        cityId: 2,
        stateId: 2,
        cityName: 'Panji'
      },
      {
        cityId: 3,
        stateId: 3,
        cityName: 'Bhopal'
      },
      {
        cityId: 4,
        stateId: 3,
        cityName: 'Indore'
      }
    ];
    this.stateList = [
      {
        stateId: 1,
        stateName: 'Maharashtra'
      },
      {
        stateId: 2,
        stateName: 'Goa'
      },
      {
        stateId: 3,
        stateName: 'Madhya Pradesh'
      }
    ];
   }

  ngOnInit(): void {
    this.cityArray = ['Nagpur', 'pune', 'mumbai'];
  }

  push() {
    this.cityArray.push(this.city);
  }
  Pop() {
    this.cityArray.pop();
  }
  Shift() {
    this.cityArray.shift();
  }
  unShift() {
    this.cityArray.unshift(this.city);
  }
  getSelected() {
    debugger;
    this.output = this.cityArray[this.city];
  }
  foorLoop() {
    debugger;
    for (let i = 0; i < this.cityArray.length; i++) {
      console.log(this.cityArray[i]);
    }
  }

  foorEachLoop() {
    debugger;
    this.cityArray.forEach(element => {
       console.log(element);
     });
  }
  multpleFor() {
    debugger;
    // tslint:disable-next-line:prefer-for-of
    for (let city = 0; city < this.cityList.length; city++) {
       // tslint:disable-next-line:prefer-for-of
       for (let state = 0; state < this.stateList.length; state++) {
         if (this.stateList[state].stateId === this.cityList[city].stateId) {
          const obj = {
            cityId: this.cityList[city].cityId,
            stateId: this.stateList[state].stateId,
            stateName: this.stateList[state].stateName,
            cityName: this.cityList[city].cityName
          };
          this.stateCityList.push(obj);
         }
       }
    }
  }
  multpleForEach() {
    debugger;
    // tslint:disable-next-line:prefer-for-of
    this.cityList.forEach(city => {
      this.stateList.forEach(state => {
        if (city.stateId === state.stateId)  {
          const obj = {
            cityId: city.cityId,
            stateId: state.stateId,
            stateName: state.stateName,
            cityName: city.cityName
          };
          this.stateCityList.push(obj);
        }
      });
    });
  }
}
