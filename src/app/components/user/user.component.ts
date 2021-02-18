import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  number1: number;
  number2: number;
  result: number;
  constructor() { }

  ngOnInit(): void {
  }
  add(): void {
    this.result = Number(this.number1)  + Number(this.number2) ;
  }

}
