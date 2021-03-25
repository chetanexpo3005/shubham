import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, TemplateRef } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-an-component',
  templateUrl: './an-component.component.html',
  styleUrls: ['./an-component.component.css'],
  entryComponents: [AdminComponent]
})
export class AnComponentComponent implements OnInit, OnChanges, AfterViewInit  {

  rollNo: number;
  headerName: string;
  // this for holding element refrence
  @ViewChild('namePara', {static: false}) para: ElementRef;
  @ViewChild(AdminComponent, {static: false}) adminViewchild: AdminComponent;
  @ViewChildren(AdminComponent) hellos: QueryList<any>;
  @ViewChild('msgTemp') private msgTempRef: TemplateRef<any>;
  cityList: string[];
  constructor() {
    console.log('constructor');
    this.rollNo = 0;
    this.cityList = ['Nahgpoyr', 'asdas', 'sadsad'];
    this.headerName = 'Employee';
   }

  ngOnInit(): void {
    const text  = document.getElementById('p2').innerHTML;
   // console.log('ngOnInit' + this.para.nativeElement);
  }
  ngOnChanges(chnages: SimpleChanges) {
    console.log('ngOnChanges');
  }
  ngAfterViewInit() {
    debugger;
    const data = this.adminViewchild;
  //  console.log('Hello ', this.adminViewchild.firstName);
    const text  = document.getElementById('p2').innerHTML;
    this.hellos.forEach(hello => console.log(hello));
    console.log('ngAfterViewInit' + this.para.nativeElement.innerHTML);
  }
  increment() {
   this.headerName = 'Employee' +  (this.rollNo ++).toString();
  }

}
