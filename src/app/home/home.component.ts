import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../classes/User';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false;
  submitted = false;
  error = '';
  users: any = null;
  user = null;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userservice: UserService
  ) {

    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {

    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });


  onSubmit() {
    this.submitted = true;
    this.users = []

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.error = ''
    this.loading = true;
    this.userservice.getUsersLList().subscribe(res => {

      res.forEach(r => { this.users.push(r) })

      let user: User = this.users.find(x => x.emailid === this.f.username.value && x.password === this.f.password.value)
      // console.log(user)


      if (user) {
        if (user.accstatus == null || user.accstatus == "inactive") {
          this.loading = false;
          return this.error = 'your account is inactive'
        }
        this.userservice.setUserData(user);

        if (user.role == "USER") {

          localStorage.setItem('currentUser', JSON.stringify(user));

          this.router.navigate(['users'])
        }
        if (user.role == "ADMIN") {

          localStorage.setItem('currentUser', JSON.stringify(user));

          this.router.navigate(['admin'])
        }
      }
      if (user == null) {
        this.loading = false;
        return this.error = 'Username or password is incorrect'


      };
      this.loading = false;

    });
    /*  this.authenticationService.login(this.f.username.value, this.f.password.value)
         .pipe(first())
         .subscribe(
             data => {
                 this.router.navigate([this.returnUrl]);
             },
             error => {
                 this.error = error;
                 this.loading = false;
             }); */
  }




  toRegister() {
    this.router.navigate(['newUser'])


  }







}
