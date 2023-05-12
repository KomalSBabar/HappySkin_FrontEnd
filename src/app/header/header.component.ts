import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //authService: any;
  k: any;
  loginStatus: boolean = false;
  searchForm: any;
  g:any;
  constructor(private router: Router, private apiService: ApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.k = localStorage.getItem('token')
    
    this.searchForm = new FormGroup({
      search:new FormControl()
    })



    console.log('1', this.k)
    this.authService.isLoggedIn.subscribe((status) => {
      this.loginStatus = status
    })
    // alert(this.k)
  }

  home() {
    this.router.navigate(['/home']);

  }
  about() {
    this.router.navigate(['/about']);

  }
  product() {
    this.router.navigate(['/products']);

  }
  cart_head() {
    this.router.navigate(['/cart']);

  }
  blog(){
    this.router.navigate(['/blogs']);
  }
  login() {
    this.router.navigate(['/login']);

    console.log('2', this.k)
    this.router.navigate([''])

  }
  reg() {
    this.router.navigate(['/reg']);
  }

  contact(){
    this.router.navigate(['/contact']); 
  }
  // onLogout() {
  //   this.authService.logout();
  // }

  logout() {
     this.k = localStorage.getItem('token')
    // console.log('3', this.k)
   localStorage.removeItem('token');
    // this.k = localStorage.getItem('token')
    // this.router.navigate(['\home'])
    localStorage.getItem('userid');
    localStorage.removeItem('userid');
      this.authService.logoutUser();    
    this.authService.isLoggedIn.subscribe((status) => {
      this.router.navigate(['\home'])  
    })
  }

  profile(){
    this.router.navigate(['\profile']);
    
    }
    search(){
      console.log(this.searchForm.value)
      
      let payload={
        "title":this.searchForm.value.search
      }

        this.apiService.search_product(payload).subscribe(res=>{
           this.g = res.data.title
           this.router.navigate(['\search']);
        })
        
    }

}

