import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  // baseurl: any = environment.baseurl2;
 baseurl : any ='http://localhost/my-pro/public/api/' ;
  

  token: any;
  status!: false;
  httpOption:any;
  constructor(public httpClient: HttpClient) { 
   this.token =  localStorage.getItem('token');
   this.httpOption = {
    headers : new HttpHeaders({
      'Authorization':'Bearer '+this.token,
      'Content-Type' :'application/json',
      'Accept':'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    }
  }
  register(payload: any): Observable<any> {
    let apiurl = this.baseurl + 'reg';
    return this.httpClient.post(apiurl, payload, this['httpOption'])

  }

  login(payload: any): Observable<any> {
    let apiurl = this.baseurl + 'login';
    return this.httpClient.post(apiurl, payload, this['httpOption'])

  }

  forgetpass(payload: any): Observable<any> {
    let apiurl = this.baseurl + 'forget';
    return this.httpClient.post(apiurl, payload, this['httpOption'])
  }




  storeproduct(payload: any): Observable<any> {
    let apiurl = this.baseurl + 'adminpanel';
    return this.httpClient.post(apiurl, payload, this['httpOption'])
  }

  displayproduct(): Observable<any> {
    let apiurl = this.baseurl + 'products';
    return this.httpClient.get(apiurl, this['httpOption'])
  }

  productincart(payload: any): Observable<any> {

    let apiurl = this.baseurl + 'productinsertcart';
    return this.httpClient.post(apiurl, payload, this['httpOption'])


  }

  displaycart(payload: any): Observable<any> {
    let apiurl = this.baseurl + 'cart';
    return this.httpClient.post(apiurl, payload, this['httpOption'])
  }

  settoken(token: any) {
    this.token?.next(token)
  }
  gettoken() {
    return this.token;
  }

  shipping(payload:any): Observable<any>{
    let apiurl = this.baseurl+ 'ship';
    return this.httpClient.post(apiurl, payload, this['httpOption'])
  }

   cartid(payload:any):Observable<any>{
    let apiurl = this.baseurl+'get_cart_id';
    return this.httpClient.post(apiurl,payload,this['httpOption'])
   }

   placeorder(payload:any):Observable<any>{
    let apiurl = this.baseurl+'checkout';
    return this.httpClient.post(apiurl,payload,this['httpOption'])
   }

  //  cardid():Observable<any>{
  //   let apiurl = this.baseurl + 'get_card_id';
  //   return this.httpClient.post(apiurl,this['httpOption'])
  //  }

   getordnumber(payload:any):Observable<any>{
    let apiurl = this.baseurl+'ordn';
    return this.httpClient.post(apiurl,payload,this['httpOption'])
   }

   displayorders(payload:any):Observable<any>{
    let apiurl = this.baseurl+'my_orders';
    return this.httpClient.post(apiurl,payload,this['httpOption'])
   }


   display_pro_byid(payload:any):Observable<any>{
      let apiurl = this.baseurl +'get_pro_byid';
      return this.httpClient.post(apiurl,payload,this['httpOption'])
   }



   details(payload:any):Observable<any>{
    let apiurl = this.baseurl+'details';
    return this.httpClient.post(apiurl,payload,this['httpOption'])
   }

   display_random_products():Observable<any>{
    let apiurl = this.baseurl +'pro_display_home';
    return this.httpClient.post(apiurl,this['httpOption'])
   }

   deleteproducts(payload:any):Observable<any>{
    let apiurl = this.baseurl+'remove';
    return this.httpClient.post(apiurl,payload,this['httpOption'])
   }

   upd_pwd(payload:any):Observable<any>{
    let apiurl = this.baseurl+'update_password';
    return this.httpClient.post(apiurl,payload, this.httpOption)
   }

   getuserdetail(payload:any){
    let apiurl = this.baseurl+'get_user_detail';
    return this.httpClient.post(apiurl,payload, this['httpOption'])
   }

   edit(payload:any):Observable<any>{
    let apiurl = this.baseurl+'edit';
    return this.httpClient.post(apiurl,payload,this['httpOption'])
   }

   search_product(payload:any):Observable<any>{
    let apiurl = this.baseurl + 'search_pro';
    return this.httpClient.post(apiurl,payload,this.httpOption)
   }
  //  ch
  public addAddress(payload:any) {
		return this.httpClient.post<any>(this.baseurl + 'addCheckoutAddress', payload, { headers: this.httpOption })
			.pipe(map(data => {
				return data;
			}));
	}

  public getUserById(id:any) {
    return this.httpClient.get<any>(this.baseurl + 'user/' + id, this.httpOption).pipe(map(data => {
      return data;
    }));
  } 
  
  public getCheckoutAddress(data:any) {
    return this.httpClient.post<any>(this.baseurl + 'getCheckoutAddress', data, this.httpOption)
      .pipe(map(data => {
        return data;
      }));
  }
  public addPayment(payload:any) {
    return this.httpClient.post<any>(this.baseurl + 'createOrder', payload, this.httpOption)
      .pipe(map(data => {
        return data;
      }));
  }

// login users cart detail
public getCartItemOfUser(userId: any) :Observable<any>{

  return this.httpClient.get<any>(this.baseurl + 'cart/item/' + userId,this.httpOption).pipe(map(data => {
    return data;
  }));
}

public updateCartItemOfUser(cartId: any, cartData:any) {
  return this.httpClient.patch<any>(this.baseurl + 'cart_update/' + cartId, cartData, cartId,).pipe(map(data => {
    return data;
  }));
}

}

