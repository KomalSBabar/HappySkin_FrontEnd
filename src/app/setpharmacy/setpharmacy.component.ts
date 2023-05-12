import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setpharmacy',
  templateUrl: './setpharmacy.component.html',
  styleUrls: ['./setpharmacy.component.css']
})
export class SetpharmacyComponent implements OnInit {

  formgroup1:any;
  error:boolean = false;
  constructor(private router:Router) { }


  ngOnInit(): void {
  }

  pharmacy_depression(){

    this.router.navigate(['/acnebother']);
  }

  continue(){

  }
}
