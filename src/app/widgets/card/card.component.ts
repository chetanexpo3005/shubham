import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() Header: string;
  @Input() SubHeader: string;
  localSubHeader: string;
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit' + this.Header);
  }
  ngOnChanges(chnages: SimpleChanges) {
    console.log('previousValue' + chnages.Header.previousValue);
    console.log('currentValue' + chnages.Header.currentValue);
    this.localSubHeader = this.SubHeader;
  }

}
