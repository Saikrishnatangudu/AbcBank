import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../classes/User';
import { Account } from '../classes/Account';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData;
  constructor(private http: HttpClient) {
    this.userData = {};
  }

  private baseUrl = 'https://my-json-server.typicode.com/Saikrishnatangudu/usersjson/users/';


  createUser(user: User) {
    return this.http.post("https://jsonplaceholder.typicode.com/users", user);
  }

  getUsersLList() {
    return this.http.get(this.baseUrl).pipe(
      map(responseData => {
        //console.log(responseData);
        const data = [];
        for (const key in responseData) {

          //console.log(responseData[key].date+"keyvalue")
          if (responseData.hasOwnProperty(key)) {


            data.push({ ...responseData[key] });
          }
        }
        return data;
      })

    );
  }


  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + id);

  }
  getUserByrole() {
    return this.http.get<User[]>(this.baseUrl + "?role=USER");

  }
  getUserBystatus() {
    return this.http.get<User[]>(this.baseUrl + "?accstatus=inactive");

  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + `${id}`, user);
  }


  getByAccNo(accno) {
    let url = "https://my-json-server.typicode.com/Saikrishnatangudu/usersjson/users";

    return this.http.get<User>(url + "?account.AccNo=" + accno)

  }




  setUserData(val: object) {
    //console.log(val)
    this.userData = val;
  }
  getUserData() {
    return this.userData;
  }

}