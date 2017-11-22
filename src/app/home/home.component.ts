import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BlogsService} from "../blogs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private request: BlogsService, private router:Router) { }

  blogs : object [];
  bid = -1;
  current : object;

  currentUserName : any;

  ngOnInit() {
    if(this.request.currentUser == null) {
      this.router.navigate(['/login']);
    }

    this.request.getData()
      .subscribe((data)=>{
        this.blogs = data;
      })

    this.currentUserName = JSON.parse(sessionStorage.getItem('id')).username;
  }
  refresh(){
    this.request.getData()
      .subscribe((data)=>{
        this.blogs = data;
      })
  }

  addBlog(data){
    console.log(this.bid);
    if(this.bid==-1) {
      this.request.postBlog(data)
        .subscribe(data => {
          this.blogs.push(data)
        })
    }
    else {
      this.request.updateBlog(this.bid,data)
        .subscribe(data => {
          this.bid=-1;
        })
    }

  }

  addToFav(blogId){
      let user = JSON.parse(sessionStorage.getItem('id'));
      if(user.favorite.includes(blogId)){
        user.favorite.pop(blogId);
      }
      else{
        user.favorite.push(blogId);
      }
      blogId = 0;
      this.request.addToFav(user)
        .subscribe(data=>{
          sessionStorage.setItem('id',JSON.stringify(user));
        })
  }

  deleteBlog(id){
    this.request.deleteData(id)
      .subscribe(data =>{ this.refresh();
      })
  }


  displayInForm(data){
    this.bid = data.id;
    (<HTMLInputElement>document.getElementById("name")).value  = data.name;
    (<HTMLInputElement>document.getElementById("category")).value  = data.category;
    (<HTMLInputElement>document.getElementById("desc")).value  = data.desc;
    console.log(this.bid);
  }

  link={
    home: ["/home"],
    login: ["/login"]
  }
  logout(){
    this.router.navigate(['/login']);
  }
}
