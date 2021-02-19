import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  isSidePanel: boolean;
  constructor() {
    this.isSidePanel = false;
   }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  showSidePanel() {
    this.isSidePanel = true;
  }
  // tslint:disable-next-line:typedef
  closeSidePnael() {
    this.isSidePanel = false;
  }

  // tslint:disable-next-line:typedef
  getStatus() {
    return this.isSidePanel;
  }
}
