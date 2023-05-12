import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  productlist: any = [];
  total: number = 0;
  uuid: any;
  resp: any;
  loggedIn: any;
  a: any;
  response: any[] = [];
  imageDirectorypath: any = "http://localhost/my-pro/public/image/";
  arg: any;
  localCart: any;
  k = localStorage.getItem('token')
  constructor(private apiService: ApiService,
    private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.user_id.subscribe(uid => {

      console.log("ok uid", uid);
      this.uuid = uid,
        this.displayc(this.uuid);

    })

    // if (localStorage.getItem('token') !== null) {
    //   this.loggedIn = true;

    // }
    // else {
    //   this.loggedIn = false
    // }
    this.displaycart();
  }



  displayc(argguments: any) {
    let payload = {

      "u_id": this.uuid
    }

    this.apiService.displaycart(payload).subscribe(res => {
      console.log(res)
      this.resp = res.data

      this.a = this.resp['id']

      this.productlist = res.data
      console.log("89", this.productlist)
      this.productlist.forEach((data: any) => {

        this.total = this.total + data.total;
      })

      this.authService.isLoggedIn.subscribe((status) => {

        this.router.navigate(['/checkout/', this.a]);
        // {queryParams:{id:'res.data.id'}}

        // this.router.navigate(['/checkout/', this.a]);
        // this.checkout(this.a);
      })

    })
  }

  displaycart(){
    this.localCart = JSON.parse(localStorage.getItem('localCart') || '{}');
    console.log('localcartvalue', this.localCart)
    const arr = this.localCart.filter((n: any, i: any) => this.localCart.indexOf(n) === i);


    console.log('arrrrrrr',arr)

    arr.forEach((element: { product_id: any; product_quantity: any; }) => {
      this.apiService.displayproduct().subscribe(res =>{

          console.log('resssss',res);



      });
    });


  }






  remove_product_from_cart(argguments: any, arg: any) {
    let payload = {

      "p_id": argguments,
      "u_id": arg
    }
    this.apiService.deleteproducts(payload).subscribe(res => {
      this.displayc(this.uuid);


    })
  }

  checkout() {

    // if (this.loggedIn === true) {
    //   this.router.navigate(['/shippingcart']);
    // } else {
    //   this.router.navigate(['/reg']);
    // }
    if(this.k !== null) {
      this.router.navigate(['/shippingcart']);
    }else {
      this.router.navigate(['/reg']);
    }

    // this.router.navigate(['/checkout']);
  }
 

    




  back_to_shoping() {
    this.router.navigate(['/products']);
  }
}


