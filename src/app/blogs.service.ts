import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map";

const BASE_URL_USERS = 'http://localhost:3000/users/';
const BASE_URL_POSTS = 'http://localhost:3000/blogList/';
const header = {headers : new Headers({'Content-type' : 'application/json'})};

@Injectable()
export class BlogsService {

  public currentUser :object = null;

  constructor(private http: Http) { }



  checkUser() {
    return this.http.get(BASE_URL_USERS)
      .map(res => res.json());

  }

  getData(){
    return this.http.get(BASE_URL_POSTS)
      .map(res => res.json());
  }

  deleteData(id){
    return this.http.delete(BASE_URL_POSTS+id, header)
      .map(res => res.json())
  }

  postBlog(data){
    return this.http.post(BASE_URL_POSTS,data, header)
      .map(res => res.json())
  }

  updateBlog(bid,data){
    console.log("from service");
    return this.http.patch(`${BASE_URL_POSTS}${bid}`,data,header)
      .map(res => res.json())
  }

  addToFav(user){
    return this.http.patch(BASE_URL_USERS+user.id+'/',user, header)
      .map(res => res.json())
  }

}
