
export class User {
id: number;
username: string;
firstName: string;
lastName: string;
email: string;
address: string;

constructor(username: string, firstName: string, lastName: string, email: string, address: string) {
this.username = username,
this.firstName = firstName;
this.lastName = lastName;
this.email = email;
this.address = address;
}
}
