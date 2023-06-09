import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ordercomplete',
  templateUrl: './ordercomplete.component.html',
  styleUrls: ['./ordercomplete.component.css']
})
export class OrdercompleteComponent implements OnInit {
  ordernumber:any;
  user_id: any = localStorage.getItem('userid');

  cid:any;
  a:any;
  constructor(private apiService: ApiService, private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    
  //   this.authService.user_id.subscribe(uid=>{
      
  //     console.log("check",uid);
  //     this.uuid =  uid,
    
    
  //  this.getCartId(this.user_id);
  //  this.getOrderNumber(this.cid);
  //   })
    this.getCartId(this.user_id);
   this.getOrderNumber(this.cid);
  }

  getCartId(argguments:any){
    // this.a = argguments;
  
  let payload={
    u_id :argguments
  }
  this.apiService.cartid(payload).subscribe((res:any)=>{
    this.cid = res.data
  })

  }


  getOrderNumber(argguments:any){
    let payload = {
      "u_id":this.user_id,
      "c_id":argguments
    }
    this.apiService.getordnumber(payload).subscribe((res:any)=>{
      this.ordernumber =res.data.order_number
    })
  }
  myord(){
    this.router.navigate(['/orders']);
  }

  continue_shoping(){
    this.router.navigate(['/products']);
  }
 
}
