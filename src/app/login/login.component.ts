import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: {username, password, id}[];
  currentUser: object;
  i: any;
  constructor(private request: BlogsService, private router:Router) {

  }

  ngOnInit() {
    this.currentUser = {username: null, password: null, id:null};

  }
  loginUser(username, password) {
        this.request.checkUser()
          .subscribe((data) => {
            this.users = data;
            for (let val of this.users){
              if (val.username === username && val.password === password) {
                sessionStorage.setItem("id",JSON.stringify(val));
                this.currentUser['username'] = username;
                console.log(this.currentUser['username']);
                this.request.currentUser = val;
                this.router.navigate(['/home']);
              }
            }
          });
  }


}
