import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skincareplan',
  templateUrl: './skincareplan.component.html',
  styleUrls: ['./skincareplan.component.css']
})
export class SkincareplanComponent implements OnInit {

  back:any;
  func:any;
  var:any;
  value: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  topical(){
 
    this.router.navigate(['/topical']);
  }
reminder(){
     this.router.navigate(['/reminder']);
}

skincare_back_question(){

   this.router.navigate(['/question']);
 
}



}
