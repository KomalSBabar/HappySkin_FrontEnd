import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-shippingcart',
  templateUrl: './shippingcart.component.html',
  styleUrls: ['./shippingcart.component.css']
})
export class ShippingcartComponent implements OnInit {
 
  productlist: any = [];
  total: number = 0;
  uuid: any;
  resp: any;
  a: any;
  t:number = 0;
  amount:number = 0;
  imageDirectorypath: any = "http://localhost/my-pro/public/image/";
  arg: any;
  submitted:boolean = false;
  loggedIn:boolean = false;
  login :any = false;
  log:any;
  response: any[] = [];
  Price: number = 0;
  imageurl: any = "https://helloclearhealth.com/staging-backend/public/images/Products/";
  cartTotal: any = '';
  cartitemlength: any = 0;
  localCart = JSON.parse(localStorage.getItem('localCart') || '{}');
  shippingcartForm: any;
  cid: any;
  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }
  pattern: string | RegExp = '^[a-zA-Z]*';
  ngOnInit(): void {
    this.uuid = localStorage.getItem('userid')
    if(localStorage.getItem('token') !== null)
    {
      this.loggedIn = true;
    }
    else
    {
      this.loggedIn = false
    }
    this.shippingcartForm = new FormGroup({
      first_name: new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern(this.pattern)]),
      last_name: new FormControl('', [Validators.required,Validators.minLength(3),Validators.pattern(this.pattern)]),
      addres: new FormControl('', [Validators.required,Validators.minLength(5)]),
      add_t: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required,Validators.pattern(this.pattern)]),
      state: new FormControl('', [Validators.required]),
      city_code: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('',[ Validators.required,Validators.email]),
      phone_number: new FormControl('', [Validators.required,Validators.minLength(9)]),
    })

    this.getCartId(this.uuid);
    this.getCartItem();



  }

get shippingcartFormControl() {
    return this.shippingcartForm.controls
  }



  // getCartItem() {
  //   if (this.loggedIn === true) {

  //       console.log('login kain andar')
  //     this.apiService.getCartItemOfUser(localStorage.getItem('user_id')).subscribe((res) => {
  //       console.log('getCartItemOfUser',res.data)
  //       for (var data of res.data) {

  //         this.response.push(data);
  //         console.log('distinctArray response', this.response.length);

         
  //         data.imageurl = this.imageurl  + data.product_image;
  //         this.total += data.product_price * data.product_quantity;
  //       }


  //     });

   
  //   } 

  // }


  getCartItem() {
   
    let payload ={
      u_id : localStorage.getItem('userid')
    }

    this.apiService.displaycart(payload).subscribe(res => {
      console.log(res)

      this.productlist = res.data
      console.log("89", this.productlist)
      this.productlist.forEach((data: any) => {

        this.total = this.total + data.total;
      })


    })
  }
  getCartId(argguments: any) {

    this.a = this.uuid;
    let payload = {
      u_id: this.uuid
    }
    this.apiService.cartid(payload).subscribe((res: any) => {
      console.log('cartids', res);
      this.cid = res.data
    })
  }
  payment() {

    console.log('payment clicked')

    this.submitted = true
    if (this.shippingcartFormControl.invalid) {
     
      return
    }else {
      let payload = {
        "u_id": this.uuid,
        "c_id": this.cid,
        "first_name": this.shippingcartForm.value.first_name,
        "last_name": this.shippingcartForm.value.last_name,
        "addres": this.shippingcartForm.value.addres,
        "add_t": this.shippingcartForm.value.add_t,
        "city": this.shippingcartForm.value.city,
        "state": this.shippingcartForm.value.state,
        "city_code": this.shippingcartForm.value.city_code,
        "email": this.shippingcartForm.value.email,
        "phone_number": this.shippingcartForm.value.phone_number,
        // $user->role_id = json_encode($request->role_id);
      }
      this.apiService.add_address(payload).subscribe(res => {
        console.log('add_responseeeeeeeeeee',res)
  
      if(res.data != null){
        console.log('payment clicked valid  ')
        this.router.navigate(['/payment'])
      }else{
        return
      }
    })
    }

  }
 

}
