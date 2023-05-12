import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  productlist: any = [] ;
  imageDirectorypath:any = "http://localhost/my-pro/public/image/";
  // user='1';
  uuid: any;
  constructor(public apiservice:ApiService,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {

    // localStorage.setItem('SessionUser',this.user)
    this.apiservice.displayproduct().subscribe(res=>{
      console.log(res)
      this.productlist =res.data
      console.log(this.productlist)



  });
}
  pro_cart(argguments : any ){
    this.authService.user_id.subscribe(uid=>{
      
    console.log("ok uid",uid);
    this.uuid =  uid
    
    
    })
    console.log("15",this.uuid)
    console.log("ok ",argguments);
    let payload ={
      "p_id":argguments.id,
      "u_id":this.uuid,
      "price":argguments.price,
      "qty":1,
       "status":0,
      "total":1 * argguments.price
    }
    this.apiservice.productincart(payload).subscribe(res=>{
      console.log(res)

      this.productlist =res.data

      // if(res.succes == true){
      //   this.router.navigate(['/cart']);
      // }
    })
   
    this.router.navigate(['/cart']);
    
    }
     
  
    
  }


