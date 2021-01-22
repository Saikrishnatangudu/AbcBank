import { from } from "rxjs";
import { Address } from "./Address";
import { Account } from "./Account"

export class User {
	id: number;
	emailid: string;
	lastname: string;
	firstname: string;
	gender: string;
	mobileno: string;
	accstatus: string;
	role: string;
	password: string;
	address: Address;
	account: Account;

	public constructor(init?: Partial<User>) {
		Object.assign(this, init);
	}



}

