import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  continue(){
    this.router.navigate(['accutaneeval'])
  }


}
