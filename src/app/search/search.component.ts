import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productlist: any = [] ;
  imageDirectorypath:any = "http://localhost/my-pro/public/image/";
  constructor(public apiservice:ApiService) { }

  ngOnInit(): void {

    // this.apiservice.search_product().subscribe(res=>{
    //   this.productlist = res.data
    // })


  }

}
