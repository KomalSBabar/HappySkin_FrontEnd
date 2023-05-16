import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardForm: any;
  productlist: any = [] ;
  imageDirectorypath:any = "http://localhost/my-pro/public/image/";

  constructor(public apiservice:ApiService) { }

  ngOnInit(): void {

    this.apiservice.displayproduct().subscribe(res=>{
      console.log(res)
      this.productlist =res.data
      console.log(this.productlist)

  })
 

}}
