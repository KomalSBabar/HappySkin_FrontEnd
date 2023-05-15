import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  BasicDetailForm: any;
  PassworddForm: any;
  uuid: any;
  nameee: any;
  isEditable:any
  user_id = localStorage.getItem('userid')
  constructor(private authService: AuthService, public apiservice: ApiService) { }

  ngOnInit(): void {

    console.log('user id ', this.user_id)

    // this.authService.user_id.subscribe(uid => {

    //   console.log("ok uid", uid);
    //   this.uuid = uid;

    // })
      // this.edit_data(this.user_id)


    let payload = {
      "id": this.user_id
    }
    this.apiservice.getuserdetail(payload).subscribe((res: any) => {
      this.nameee = res.data;

      console.log(res.data)

      // Set Values
      this.BasicDetailForm.controls["firstName"].patchValue(this.nameee.name);
      this.BasicDetailForm.controls["emailAddress"].patchValue(this.nameee.email);
      this.BasicDetailForm.controls["phoneNumber"].patchValue(this.nameee.phone_no);
      this.BasicDetailForm.controls["Gender"].patchValue(this.nameee.gender);

    })


    // this.authService.user_id.subscribe(uid => {

    //   console.log("ok uid", uid);
    //   this.uuid = uid;

    //   // this.edit_data(this.uuid)

    // })

    this.PassworddForm = new FormGroup({
      currentpass: new FormControl(),
      password: new FormControl(),
      c_password: new FormControl()
    })

    this.BasicDetailForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      emailAddress: new FormControl(),
      phoneNumber: new FormControl(),
      Gender: new FormControl()
    })


  }

  upd_pwd(argguments: any) {


    console.log(this.PassworddForm.value)
    // localStorage.getItem('token')
    let payload = {
      "u_id": this.uuid,
      "currentpass": this.PassworddForm.value.currentpass,
      "password": this.PassworddForm.value.password,
      "c_password": this.PassworddForm.value.c_password
    }

    console.log(payload);

    this.apiservice.upd_pwd(payload).subscribe(res => {
      console.log(res)
    })

  }


  editProfile() {
    this.isEditable = !this.isEditable
  }



  edit_data(argguments: any) {

    let payload = {
      "id": this.uuid,
      "name": this.BasicDetailForm.value.firstName,
      "email": this.BasicDetailForm.value.emailAddress,
      "phone_no":this.BasicDetailForm.value.phoneNumber,
      "gender":this.BasicDetailForm.value.gender
    }
    this.apiservice.edit(payload).subscribe(res => {
      console.log(res)
    })
  }

}
