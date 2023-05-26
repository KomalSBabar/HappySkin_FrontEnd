import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productlist: any = [] ;
   loginStatus: boolean = false;
  uuid: any;
  pd: any;
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  localcart: any;
  localCart: any;
 
  imageDirectorypath:any = "http://localhost/my-pro/public/image/";
  constructor(public apiservice:ApiService,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {

    // this.apiservice.search_product().subscribe(res=>{
    //   this.productlist = res.data
    // })

 this.apiservice.displayproduct().subscribe(res=>{
      console.log(res)
      this.productlist =res.data
      console.log(this.productlist)



  });
  }


    pro_cart(argguments : any ){
          console.log('agyiiiiiii')
          this.authService.user_id.subscribe(uid=>{
            
          console.log("ok uid",uid);
          this.uuid = localStorage.getItem('userid')
          
          
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




}
