import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'BankingApp/src/app/classes/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  @Input() userlist: any = null;
  constructor(private usrservice: UserService, private Route: Router) { }

  ngOnInit(): void {
    this.getByrole();
  }


  getByrole() {

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


  editusr(user: User) {
    console.log(user);
    this.Route.navigate(['edit'], { queryParams: { id: user.id } })
  }
  view(user: User) {

    this.Route.navigate(['view'], { queryParams: { id: user.id } })

  }


}
