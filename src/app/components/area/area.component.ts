import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  CompanyList: ICompany[];
  Company: ICompany;
  constructor(private http: HttpClient) {
    this.CompanyList = [];
    this.Company = {
      CompanyId: 0,
      CompanyName: ''
    };
  }

  ngOnInit(): void {
    this.loadCompany();
  }
  loadCompany(): void  {
    this.http.get('http://storeapi.gerasim.in/api/Company/GetCompany',).subscribe((res: any) => {
      if (res.length > 0) {
        this.CompanyList = res;
      }
    });
  }

  saveCompany(): void {
    this.http.post('http://storeapi.gerasim.in/api/Company/addCompany', this.Company).subscribe((res: any) => {
      this.loadCompany();
    });
  }

}

export interface ICompany {
  CompanyId: number;
  CompanyName: string;
}
