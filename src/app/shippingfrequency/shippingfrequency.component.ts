import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupName } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shippingfrequency',
  templateUrl: './shippingfrequency.component.html',
  styleUrls: ['./shippingfrequency.component.css']
})
export class ShippingfrequencyComponent implements OnInit {
  Formgroup1:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
   this.Formgroup1 = new FormGroup ({
    other_products :new FormControl()
   })


  }

  continue(){
    
    this.router.navigate(['shippingcart']);

  }
}
