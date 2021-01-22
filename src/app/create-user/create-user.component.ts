import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';
import { ViewUserComponent } from '../view-user/view-user.component';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    // this.getCustomerList()
  }

  submitted = false;

  profileForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    emailid: ['', Validators.required],
    mobileno: ['', Validators.required],
    gender: ['', Validators.required],
    password: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required]
    }),
  });
  get f() { return this.profileForm.controls; }
  private user = new User();
  onSubmit() {
    this.submitted = true;

    //console.log(this.profileForm);
    this.user = this.profileForm.value;
    this.user.accstatus = "inactive";
    this.user.role = "USER"
    // console.log(this.profileForm.value);

    this.userService.createUser(this.user).subscribe(res => {
      // localStorage.setItem('user', JSON.stringify(this.user));
      console.log("------UserCreated--------------");

      console.log(JSON.stringify(res));

    })
    //this.profileForm.reset();
    // this.toLogin();

  }
  users: any = null;
  gtusr() {
    this.users = [];

    this.userService.getUsersLList().subscribe(res => {

      res.forEach((us) => this.users.push(us));
      console.log(this.users)
      let user = this.users.find(x => x.emailid === "sai@gmail.com" && x.password === "sai")
      console.log(user)
    })
  }


  toLogin() {

    this.router.navigate(['home']);
  }

}
