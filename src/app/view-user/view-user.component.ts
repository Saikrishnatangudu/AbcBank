import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../classes/User';
import { HomeComponent } from '../home/home.component';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  currentUser: User;
  isclicked;
  sub: Subscription;

  constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router, private activateRouter: ActivatedRoute) {
    //this.currentUser = userService.getUserData();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(this.currentUser)


    this.isclicked = false;
  }
  ngOnInit(): void {

  };


  @Input() user: User



  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }




}

