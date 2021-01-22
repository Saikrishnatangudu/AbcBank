import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'BankingApp/src/app/classes/User';
import { UserService } from 'BankingApp/src/app/services/user.service';
import { Account } from '../classes/Account';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private us: UserService, private route: ActivatedRoute, private router: Router) { }
  user: User;
  ngOnInit(): void {
    this.getone();
  };


  getone() {
    this.route.queryParams.subscribe(res => {
      console.log(res.id + "id")
      this.id = res.id;
      this.us.getUserById(this.id).subscribe(r => {
        this.user = r
        console.log(this.user)

      })
    })

  }

  id: number;
  selectedItem = '';
  accno;
  items = ["Savings", "reccuring", "current"];
  selected() { }

  update() {
    let userobj = new User();
    userobj = this.user
    console.log(this.selectedItem)
    console.log(this.user);
    let acc = new Account();

    acc.AccNo = this.accno
    acc.AccType = this.selectedItem
    acc.balance = 0
    this.user.account = acc
    this.user.accstatus = "active"
    this.user.account.balance = 0;
    this.us.updateUser(this.user.id, this.user).subscribe(res => console.log(res));
    this.router.navigate(['admin'])

  }



}
