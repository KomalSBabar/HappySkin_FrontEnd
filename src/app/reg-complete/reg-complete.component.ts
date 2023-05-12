import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-complete',
  templateUrl: './reg-complete.component.html',
  styleUrls: ['./reg-complete.component.css']
})
export class RegCompleteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  question(){
    this.router.navigate(['/question']);
  }
  back(){
    this.router.navigate(['/birthdate']);
  }
}
