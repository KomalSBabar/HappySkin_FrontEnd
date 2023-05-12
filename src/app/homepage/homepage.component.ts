import { Component, OnInit } from '@angular/core';
import {  OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  productlist: any = [] ;
  imageDirectorypath:any = "http://localhost/my-pro/public/image/";
  uuid: any;
  pd: any;
  loginStatus: boolean = false;
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  localcart: any;
  localCart: any;
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor(public apiservice:ApiService,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  //   this.apiservice.display_random_products().subscribe(res=>{
  //     console.log(res)
  //       this.productlist = res.data
  //     console.log(this.productlist)
  // });

  
  this.apiservice.displayproduct().subscribe(res=>{
        console.log(res)
          this.productlist = res.data
        console.log(this.productlist)
    });

this.authService.isLoggedIn.subscribe((status)=>{
      this.loginStatus = status
})

  }
  pro_cart(argguments : any ){
    console.log('agyiiiiiii')
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
      //  "category":argguments.category,
      "total":1 * argguments.price
    }
    this.apiservice.productincart(payload).subscribe(res=>{
      console.log(res)
    })
    this.router.navigate(['/cart']);
    
    }
     
    addtocartlocal(id:any){
      console.log('addtocartlocal_without_login')
      this.localcart =localStorage.getItem('localCart');
    
      this.localCart = this.localcart ? JSON.parse(this.localcart || '') : null;
        if (this.localCart == null) {
          this.localCart = [];
        }
        let myObj = this.localCart.filter((p: any) => p.product_id == id);
        if (myObj.length == 0) {
          let data = {
            product_id: id,
            product_quantity: 1
          }
          this.localCart.push(data);
        } else {
          if (this.localCart.length) {
            for (var c of this.localCart) {
              if (c.product_id == id) {
                c.product_quantity += 1;
              }
            }
          }
        }
        localStorage.setItem('localCart', JSON.stringify(this.localCart));
        this.router.navigate(['/cart']);
    }



    
    getRandomItem(arr:any) {

      // get random index value
      const randomIndex = Math.floor(Math.random() * arr.length);
  
      // get random item
      const item = arr[randomIndex];
  
      return item;
  }

  getStarted(){
    this.router.navigate(['/zipcode']);
  }
    
  getStarted_loginuser(){
    this.router.navigate(['/reg-complete']);
  }

}
