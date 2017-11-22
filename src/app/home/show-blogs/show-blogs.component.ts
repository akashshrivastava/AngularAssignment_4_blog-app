import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-show-blogs',
  templateUrl: './show-blogs.component.html',
  styleUrls: ['./show-blogs.component.css']
})
export class ShowBlogsComponent implements OnInit {

  @Input() blogs;
  @Output() notifyDeleteData: EventEmitter<number> = new EventEmitter<number>();
  @Output() notifyFavData: EventEmitter<object> = new EventEmitter<object>();
  @Output() notifyUpdateData: EventEmitter<object> = new EventEmitter<object>();

  constructor() { }
  post:any;
  user:object;

  ngOnInit() {
  }

  getSessionKey(){
    return JSON.stringify(JSON.parse(sessionStorage.getItem('id')).id);
  }
  getSessionUser(){
    return JSON.parse(sessionStorage.getItem('id'));
  }

  emitDeleteData(data){
    this.notifyDeleteData.emit(data.id);
  }

  emitFavData(blogId,status){
    this.notifyFavData.emit(blogId);
  }


  emitUpdateData(data){
    this.notifyUpdateData.emit(data);
  }

  showAllDiv(){
    var thisDiv = document.getElementById('divAll');
    thisDiv.style.display = 'block';
    var otherDiv1 = document.getElementById('divMy');
    otherDiv1.style.display = 'none';
    var otherDiv2 = document.getElementById('divFav');
    otherDiv2.style.display = 'none';
  }
  showMyDiv(){
    var thisDiv = document.getElementById('divMy');
    thisDiv.style.display = 'block';
    var otherDiv1 = document.getElementById('divAll');
    otherDiv1.style.display = 'none';
    var otherDiv2 = document.getElementById('divFav');
    otherDiv2.style.display = 'none';
  }
  showFavDiv(){
    var thisDiv = document.getElementById('divFav');
    thisDiv.style.display = 'block';
    var otherDiv1 = document.getElementById('divAll');
    otherDiv1.style.display = 'none';
    var otherDiv2 = document.getElementById('divMy');
    otherDiv2.style.display = 'none';
  }
}
