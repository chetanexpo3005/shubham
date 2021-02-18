import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  div1visible: boolean;
  constructor() {
    this.div1visible = false;
   }

  ngOnInit(): void {
  }
  toggle(): void {
    this.div1visible = !this.div1visible;
  }
  getVisible(): boolean  {
    return this.div1visible;
  }

}
