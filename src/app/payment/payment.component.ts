import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';
import { isEmpty } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AnyARecord } from 'dns';
import { AngularStripeService } from '@fireflysemantics/angular-stripe-service'


export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',

  },
};
const Stripe1 = require('stripe')
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentComponent implements OnInit, AfterViewInit {
  productlist: any = [];
  total: number = 0;
  user: any;
  uuid: any;
  a: any;
  cid: any;
  div_id: any;
  show_billing_block: boolean = false;
  shippingcartFormControl: any;
  paymentformgroup: any;
  cdid: any;
  Price_non_pre_product: number = 0;
  Price: number = 0;
  bsCurDate: any = new Date()
  submitted = false;
  response: any[] = [];
  imageDirectorypath: any = "http://localhost/my-pro/public/image/";
  loggedIn: boolean = false;
  stripeKey = environment.publishableKeyStripe
  stripe: any;
  cardElement: any;
  // Stripe: any;
  imageurl: any = "https://helloclearhealth.com/staging-backend/public/images/Products/";
  cartId: any;
  minAmountShipping: any;
  shipping: any = 0;
  taxes: any;
  response1: any;
  response2: any;
  discount: any;
  user_id = localStorage.getItem('userid');
  addressResponse: any;
  billingaddressForm: any;
  case_id: any;
  set_cartid: any;
  customer_i: any;


  constructor(private apiService: ApiService, private authService: AuthService,
    private router: Router,
    private stripeService: AngularStripeService) { }

  ngAfterViewInit() {
    this.stripeService.setPublishableKey('pk_test_2syov9fTMRwOxYG97AAXbOgt008X6NL46o').then(
      stripe => {
        this.stripe = stripe;
        const elements = stripe.elements();
        this.cardElement = elements.create('cardNumber', {});
        console.log('cardElement', this.cardElement);

        this.cardElement.mount('#card_number');

        var exp = elements.create('cardExpiry', {});
        exp.mount('#card_expiry');

        var cvc = elements.create('cardCvc', {});
        cvc.mount('#card_cvc');
      });
  }


  ngOnInit(): void {

    this.getCartId(localStorage.getItem('userid'));
    


    // var Stripe: any;

    //  console.log('STRIPE JKEY',this.stripeKey)

    //  this.stripe = Stripe1(this.stripeKey);
    //  console.log('stripe', this.stripe.elements());
    //  var elements = this.stripe?.elements();
    //  this.cardElement = elements.create('cardNumber', {});
    //  console.log('cardElement', this.cardElement);

    //  this.cardElement.mount('#card_number');

    //  var exp = elements.create('cardExpiry', {});
    //  exp.mount('#card_expiry');

    //  var cvc = elements.create('cardCvc', {});
    //  cvc.mount('#card_cvc');









    // start generate card details form
    //  this.stripe = Stripe(this.stripeKey);
    //  console.log('stripe', this.stripe);
    //  var elements = this.stripe.elements();
    //     this.cardElement = elements.create('cardNumber', {});
    // console.log('stripe', this.stripe);
    // this.cardElement.mount('#card_number');
    //  this.cardElement.mount(this.paymentformgroup.value.cardname);

    this.paymentformgroup = new FormGroup({
      // cardnumber:new FormControl('', [Validators.required,Validators.maxLength(16)]),
      cardname: new FormControl('', [Validators.required]),
      // expirydate :new FormControl('', [Validators.required]),
      // cvccode:new FormControl('', [Validators.required,Validators.maxLength(3)]),
      shiping_add: new FormControl(),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      addres: new FormControl('', [Validators.required]),
      add_t: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city_code: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone_number: new FormControl('', [Validators.required]),

      // phone_number: new FormControl('', [Validators.required, Validators.pattern("^((\\+1-?)|0)?[0-9]{10}$")]),

    })




    // this.apiService.getActiveAccountNumber().subscribe(resdata => {
    //   console.log('call kara',resdata)
    //   this.getMyCartList();
    // })

    if (localStorage.getItem('token') !== null) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false
    }
    this.getCartItem();

    this.getCheckoutAddress();
  }


  get paymentFormControl() {
    return this.paymentformgroup.controls
  }

  async getMyCartList() {
    this.response = []
    this.apiService.getCartItemOfUser(localStorage.getItem('userid')).subscribe(async res => {
      // this.cartId = res.data[0].id;
      this.response = res.data



      let crt = '';
      for (var data of res.data) {
        crt += data.id + ",";
        this.cartId = crt;

        data.imageurl = this.imageurl + 'Products/' + data.product_image;
        this.total += data.product_price * data.product_quantity;
      }

      // If no product in cart then redirect to home screen
      if (this.response.length == 0) {
        this.router.navigate(['/'])
      }

      this.cartId = crt;
      //this.response1 = await this.getTopicalFees();
      this.response1 = 0;

      //this.response2 = await this.getLiveVisitForFee();
      this.response2 = 0;


      this.minAmountShipping = await this.getMinimumShippingAmount();
      this.calculateSubTotal();
      // this.case_id = await this.getCaseId();
    })

    console.log('dekhh idhararrrr', this.cartId)


  }
  // function at radio button
  AddBillingAddress_show(event: any) {
    if (event.target.checked == true) {
      this.show_billing_block = true;
    } else if (event.target.checked == false) {
      this.show_billing_block = false;
    }

  }

  AddBillingAddress_hide(event: any) {
    if (event.target.checked == true) {
      this.show_billing_block = false;
    }
  }

  plus(cart_id: any, index: any) {

    this.response[index].product_quantity += 1
    let data = {
      quantity: this.response[index].product_quantity,
    }
    this.apiService.updateCartItemOfUser(cart_id, data).subscribe(res => {

      // if (res) {
      //   this.apiService.setActiveAccountNumber(this.response);

      // }
    }, err => {

    });
    this.calculateSubTotal();
  }

  minus(cart_id: any, index: any) {

    if (this.response[index].product_quantity - 1 < 1) {
      this.response[index].product_quantity = 1
    } else {
      this.response[index].product_quantity -= 1;
    }
    let data = {
      quantity: this.response[index].product_quantity,
    }
    this.apiService.updateCartItemOfUser(cart_id, data).subscribe(res => {
      console.log(res);

      // if (res) {
      //   this.apiService.setActiveAccountNumber(this.response);

      // }
    }, _err => {

    });
    this.calculateSubTotal();
  }



  async calculateSubTotal() {
    var price = 0;
    var price_non_pre_product = 0;

    for (let p of this.response) {
      price += (p.product_price * p.product_quantity);
      price_non_pre_product += (p.product_price * p.product_quantity);

    }
    console.log('price', price);
    console.log('this.minAmountShipping', this.minAmountShipping);

    if (price < this.minAmountShipping) {
      this.shipping = await this.getShippingFees();
    } else {
      this.shipping = 0;
    }

    this.taxes = await this.getTaxJar();
    console.log('this.taxes', this.taxes);

    let cal = this.response1 + this.response2 + this.shipping + this.taxes - this.discount
    price += cal;


    let cal_price_non_pre_product = this.response1 + this.response2;
    price_non_pre_product += cal_price_non_pre_product;

    console.log("Total price::----", price)
    this.Price = price;

    this.Price_non_pre_product = price_non_pre_product
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
  async place_order() {

    this.submitted = true

    // different billing address
    if (this.paymentformgroup.value.shiping_add == "different_billing_address") {

      
        console.log('shipp insdied valid')
        let s_token = await this.createToken();
        console.log('toki', s_token)
        if (s_token !== isEmpty) {

          console.log('inside toki')
          // addres store karega 
          let payload1 = {
            "u_id": localStorage.getItem('userid'),
            // cartid
            // "u_id": this.uuid,
            "c_id": localStorage.getItem('cartid'),
            "first_name": this.paymentformgroup.value.first_name,
            "last_name": this.paymentformgroup.value.last_name,
            "addres": this.paymentformgroup.value.addres,
            

            "add_t": this.paymentformgroup.value.add_t,
            "city": this.paymentformgroup.value.city,
            "state": this.paymentformgroup.value.state,
            "city_code": this.paymentformgroup.value.city_code,
            "email": this.paymentformgroup.value.email,
            "phone_number": this.paymentformgroup.value.phone_number,
            "address_type": "2",
            "token": localStorage.getItem('token'),

          }
          console.log('payloaa', payload1)
          // console.log('uid', payload1.user_id)
          console.log('uid', payload1.token)
          this.apiService.addAddress(payload1).subscribe(res => {
            console.log('add api', res)

            if(res.data !== null){
              let payload2 = {
                // "email": this.paymentformgroup.value.email,
                "stripe_token":'tok_visa'
            }
        
        
            this.apiService.create_cus_id(payload2).subscribe(res =>{
                console.log('customer id',res.data.id)
                this.customer_i = res.data.id;
                if(res.data !== null){
                  let payload3 = {
                    "id":this.user_id,
                    "customer_id":this.customer_i
                  }
                  console.log('payload3',payload3)
                  this.apiService.store_cusid(payload3).subscribe(res =>{
                      console.log("data stored",res)
                      if(res.data === 1){
                      
                       this.router.navigate(['/ordercomplete', this.a]);
                      }
                  })
                }else{
                  return
                }
            })

            }else{
              return
            }

          });

      }

    }

    //same shipping address
    else {

      console.log('kuch nhi', this.paymentformgroup.value.shiping_add)
      let token = await this.createToken();
      console.log('tokennnnn', token);

     
      let payload2 = {
        // "email": this.paymentformgroup.value.email,
        "stripe_token":'tok_visa'
    }


    this.apiService.create_cus_id(payload2).subscribe(res =>{
      console.log('customer id',res.data.id)
      if(res.data !== null){
        let payload3 ={
          "id":this.user_id,
          "customer_id":this.customer_i
        }
        this.apiService.store_cusid(payload3).subscribe(res => {
          if(res.data !== null){
                      
            this.router.navigate(['/ordercomplete', this.user_id]);
           }
        })
      }
    })

   

    }





    //   console.log('exdate',this.paymentformgroup.value.expirydate)
    //   this.paymentformgroup.value.expirydate =  ('0' + (this.paymentformgroup.value.expirydate.getMonth()+1)) +'-'+ this.paymentformgroup.value.expirydate.getFullYear()
    //  let payload ={
    //   "u_id":this.uuid,
    //   "c_id":this.cid,
    //   "card_id":this.cdid,
    //   "order_status":"done",

    //   "payment_status":"done",

    //   "card_number":this.paymentformgroup.value.cardnumber,
    //   "card_name":this.paymentformgroup.value.cardname,
    //   "expiry_date":this.paymentformgroup.value.expirydate,
    //   "cvc_code":this.paymentformgroup.value.cvccode,
    //  "ship_add_id":this.paymentformgroup.value.shiping_add



    //  }

    //  console.log("order",payload);
    //  this.apiService.placeorder(payload).subscribe(res=>{
    //   console.log(res)
    //   this.router.navigate(['/ordercomplete', this.a]);

    //  })


  }


  getMinimumShippingAmount() {
    // return new Promise((resolve) => {
    //   this.apiService.getMinimumShippingAmount().subscribe((res: { data: { amount: any; }; }) => {
    //     resolve(parseFloat(res.data.amount))
    //   }, (error: any) => {
    //     resolve(0)
    //   })
    // })
  }

  getShippingFees() {
    // return new Promise((resolve) => {
    //   this.apiService.getShippingFees().subscribe((res: { data: { amount: string; }; }) => {
    //     console.log('ship----', res);
    //     resolve(parseFloat(res.data.amount))
    //   }, (error: any) => {
    //     resolve(0)
    //   })
    // })
  }

  getTaxJar() {
    let payload = {
      user_id: this.user_id
    }
    // return new Promise((resolve) => {
    //   this.apiService.getTaxJar(payload).subscribe((res:any) => {
    //     if (res) {
    //       resolve(res.data)
    //     } else {
    //       resolve(0)
    //     }
    //   })
    // })
  }

  createToken() {
    console.log('card element ', this.cardElement)

    return new Promise((resolve) => {
      console.log('stripe_token 1', resolve)
      // console.log('card element andar ',this.paymentformgroup.value.cardnumber)
      console.log('card element andar ', this.cardElement)
      // this.stripe.createToken(this.paymentformgroup.value.cardnumber).then(function (result:any) {
      this.stripe.createToken(this.cardElement).then(function (result: any) {
        console.log('stripe_token 2', result)
        if (result.error) {
          // Inform the user if there was an error
          resolve(0)
        } else {
          // Send the token to your server
          resolve(result.token.id)
        }
      }, (error: any) => {
        resolve(0);
      })
    })
  }


  onOpenCalendar(container: any) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('month');
  }

  back_to_shiping() {
    this.router.navigate(['/checkout']);
  }

  getCheckoutAddress() {
    console.log('mm')
    let data = {
      user_id: localStorage.getItem('userid')
    }
    let userEmail: any;
    this.apiService.getUserById(localStorage.getItem('userid')).subscribe((res: any) => {
      this.user = res.data;
      userEmail = res.data.email;
    });
    this.apiService.getCheckoutAddress(data).subscribe((res: any) => {
      console.log('test----', res);
      this.addressResponse = res.data;
      this.set_cartid = localStorage.setItem('cartid', this.addressResponse.cart_id)

      console.log('after', this.addressResponse);
      console.log('after', this.addressResponse);
      this.billingaddressForm.patchValue({
        firstName: res.data.patient_firstname,
        lastName: res.data.patient_lastname,
        emailAddress: !res.data.email ? userEmail : res.data.email,
        phoneNumber: res.data.phone
      })
    });
  }

  // getCartItem() {
  //   if (this.loggedIn === true) {

  //     console.log('login kain andar')
  //     this.apiService.getCartItemOfUser(localStorage.getItem('userid')).subscribe((res) => {
  //       console.log('getCartItemOfUser', res.data)

  //       for (var data of res.data) {

  //         this.response.push(data.id);
  //         console.log('distinctArray response', this.response);


  //         data.imageurl = this.imageurl + data.product_image;
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

  makePayment(amount:any){
      const  paymentHandler = (<any>window).StripeCheckout.configure({
        key :'pk_test_51J08tDJofjMgVsOdG6uXh2LUBtjObBJiQ719j0yI1EyKipIJLj1ZZvYLvVJ1IUJ5egeA2njTg7GJLOQt1fD3IIH9002jPaahNB',
        locale:'auto',
        token:function(stripeToken:any){
          console.log(stripeToken.card);
          alert('stripe token generated');
        },
      });

      paymentHandler.open({
        // passed static values for now
        name:'komal',
        description:'non-prescribe product',
        amount: 50,
      });

  }



}
