import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'BankingApp/src/app/services/user.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-showselecteduser',
  templateUrl: './showselecteduser.component.html',
  styleUrls: ['./showselecteduser.component.css']
})
export class ShowselecteduserComponent implements OnInit {
  constructor(private us: UserService, private route: ActivatedRoute, private router: Router) { }

  userda: User;
  ngOnInit(): void {
    this.getone();
  };

  id;
  getone() {
    this.route.queryParams.subscribe(res => {
      console.log(res.id + "id")
      this.id = res.id;
      this.us.getUserById(this.id).subscribe(r => {
        this.userda = r

      })
    })

  }

  goback() {

    this.router.navigate(['admin'])
  }

}
