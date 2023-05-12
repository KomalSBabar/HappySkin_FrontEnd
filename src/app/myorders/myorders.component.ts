import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  productlist: any = [] ;
  list: any = [] ;
  imageDirectorypath:any = "http://localhost/my-pro/public/image/";
  // user='1';
  uuid: any;
  resp: any;
  a: any;
  total: number = 0;
  constructor(private apiService: ApiService, private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.authService.user_id.subscribe(uid => {

      console.log("ok uid", uid);
      this.uuid = uid,
        this.displayorders(this.uuid);
       
    })
  }
  displayorders(argguments: any) {
    let payload = {

      "u_id": this.uuid
    }

    this.apiService.displayorders(payload).subscribe(res => {
      console.log(res)
      this.resp = res.data

     this.a = this.resp['id']

      this.productlist = res.data
      console.log("89", this.productlist)
      this.productlist.forEach((data: any) => {
        
        this.total = this.total + data.total;
      })

      this.authService.isLoggedIn.subscribe((status) => { 
      })

    })
  }

  displyporder_details(argguments:any){

console.log('this.a',argguments)

    let payload = {

      "id":argguments
    }
    this.apiService.details(payload).subscribe(res=>{
      this.list = res.data
      
      console.log(this.list)
    })
  }
  
}
