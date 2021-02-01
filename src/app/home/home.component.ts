import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedUsers: User[] = [new User('admin', 'dimitris', 'kaxros', 'it21327@hua.gr', 'kallithea')];
  myForm: FormGroup;
  constructor() { }

  ngOnInit() {
    console.log(this.loggedUsers);
  }

}
