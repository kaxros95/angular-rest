import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
    // this.router.navigate(['LoggedoutPage']); // tells them they've been logged out (somehow)
   // this.router.navigate(['home']);
  }

}
