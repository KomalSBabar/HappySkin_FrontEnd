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
  uuid: any;
  cid:any;
  a:any;
  constructor(private apiService: ApiService, private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    
    this.authService.user_id.subscribe(uid=>{
      
      console.log("check",uid);
      this.uuid =  uid,
    
    
   this.getCartId(this.uuid);
   this.getOrderNumber(this.cid);
    })
  }

  getCartId(argguments:any){
    this.a = this.uuid;
  
  let payload={
    u_id :this.uuid
  }
  this.apiService.cartid(payload).subscribe((res:any)=>{
    this.cid = res.data
  })

  }




  getOrderNumber(argguments:any){
    let payload = {
      "u_id":this.uuid,
      "c_id":this.cid
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
