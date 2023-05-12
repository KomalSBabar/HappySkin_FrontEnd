import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productupsell',
  templateUrl: './productupsell.component.html',
  styleUrls: ['./productupsell.component.css']
})
export class ProductupsellComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  productupsell_back_topical(){
    this.router.navigate(['topical']);
  }

  shippingfreq(){
    this.router.navigate(['shippingfrequency']);
  }
}
