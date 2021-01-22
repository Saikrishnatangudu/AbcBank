import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'BankingApp/src/app/classes/User';
import { TransactionsService } from '../services/transactions.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-show-transaction',
  templateUrl: './show-transaction.component.html',
  styleUrls: ['./show-transaction.component.css']
})
export class ShowTransactionComponent implements OnInit {

  constructor(private transactionservice: TransactionsService, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getTransactionsbyfromAcc();



  }
  trasactionlist: any = null;
  items = ["ammount", "date", "accNo"];
  selectedItem = '';
  ammount = '';
  accNo = '';

  selected() { };

  getTransactions() {
    this.trasactionlist = [];
    this.transactionservice.getTrans().subscribe(res => {

      res.forEach((t, index) => {

        this.trasactionlist.push(t);
        console.log(JSON.stringify(this.trasactionlist))

      });
    });
  }
  getTransactionsbyfromAcc() {
    let cuser: User = JSON.parse(localStorage.getItem('currentUser'));

    this.trasactionlist = [];
    this.transactionservice.getTransactionsByfromAccNo(cuser.account.AccNo).subscribe(res => {

      res.forEach((t, index) => {

        this.trasactionlist.push(t);
        // console.log(JSON.stringify(this.trasactionlist))

      });
    });
  }



  sd = ''
  ed = ''

  getBydate(sd, ed) {

    console.log(sd)
    var std = new Date(sd);
    var etd = new Date(ed);

    this.trasactionlist = [];

    this.transactionservice.getBydate(std, etd).subscribe(res => {
      //  console.log(res);
      res.forEach(t => { this.trasactionlist.push(t); });

    })

  }


  getlist(ammount) {
    //console.log("--------------------"+userId)

    this.trasactionlist = [];
    this.transactionservice.getTransactionsByAmmount(ammount).subscribe(res => {
      res.forEach(t => { this.trasactionlist.push(t); });


    });
  }

  getlistbyAccono(accNo) {

    this.trasactionlist = [];
    this.transactionservice.getTransactionsByAccNo(accNo).subscribe(res => {
      res.forEach(t => { this.trasactionlist.push(t); });


    });

  }
  goback() {

    this.router.navigate(['users'])
  }

}