import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminviewComponent } from '../adminview/adminview.component';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router, private adm: AdminviewComponent, private usrservice: UserService) { }

  ngOnInit(): void {
  }
  userlist = null;



  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }



  getbyrole() {

    this.usrservice.getUserByrole().subscribe(res => {

      this.userlist = []

      res.forEach((t, index) => {

        this.userlist.push(t);
        // console.log(JSON.stringify(this.trasactionlist))

      });

    })

  }


  getbystatus() {

    this.usrservice.getUserBystatus().subscribe(res => {

      this.userlist = []

      res.forEach((t, index) => {

        this.userlist.push(t);
        // console.log(JSON.stringify(this.trasactionlist))

      });

    })
  }

}
