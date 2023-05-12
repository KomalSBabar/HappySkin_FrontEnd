import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {Directive} from '@angular/core';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  productlist: any = [];
  total: number = 0;
  uuid: any;
  uid: any;
  checkoutForm: any;
  a: any;
  cid: any;
  j: any;
  k: any;
  imageDirectorypath: any = "http://localhost/my-pro/public/image/";
  submitted = false;
  pattern: string | RegExp = '^[a-zA-Z]*';


  constructor( private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
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

    this.authService.user_id.subscribe(uid => {

      console.log("check", uid);
      this.uuid = uid,
        this.displayc(this.uuid);
      this.getCartId(this.uuid);
    })
    //  this.getCardId();
  }
 
  get checkoutFormControl() {
    return this.checkoutForm.controls
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
    // this.uid = this.checkoutForm.value;

    this.submitted = true
    if (this.checkoutForm.invalid) {
     
      return
    }


    let payload = {
      "u_id": this.uuid,
      "c_id": this.cid,
      "first_name": this.checkoutForm.value.first_name,
      "last_name": this.checkoutForm.value.last_name,
      "addres": this.checkoutForm.value.addres,
      "add_t": this.checkoutForm.value.add_t,
      "city": this.checkoutForm.value.city,
      "state": this.checkoutForm.value.state,
      "city_code": this.checkoutForm.value.city_code,
      "email": this.checkoutForm.value.email,
      "phone_number": this.checkoutForm.value.phone_number,


      // $user->role_id = json_encode($request->role_id);
    }
    console.log("pay", payload);
    // this.j = false;
    // this.k = false;
    this.apiService.shipping(payload).subscribe(res => {
      alert('data store in shipping table');
      console.log("shipping data", res)
      // this.k = res.data



      // if (res.data.success === true) {
      //   this.k = false;





        this.router.navigate(['/payment']);
      // }
      // else {
      //   this.j = 'true';
      //   console.log('error occured', this.j)
      // }

    })

    //   (success) => {
    //     this.loading = true;
    //     this.data = success.result;
    //     this.loading = false;
    //     console.log('Result - ', data);
    //     console.log('data is received');
    //   },
    //  (error) => {
    //    this.errorApi = true;
    //    console.log('Error state from API:,' error)}



  }










  displayc(argguments: any) {
    let payload = {

      "u_id": this.uuid

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



}
