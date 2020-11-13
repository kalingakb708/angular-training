import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in29Minutes';
  password = 'nascar';
  ErrorMsg = "invalid Credentials";
  invalidLogin=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username);
    console.log(this.password);

    if(this.username=="in28minutes" && this.password=="dummy"){
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin=true;
      console.log(this.invalidLogin);
    }else{
      this.router.navigate(['login']);
      this.invalidLogin=false;
      console.log(this.invalidLogin);
    }
  }
}
