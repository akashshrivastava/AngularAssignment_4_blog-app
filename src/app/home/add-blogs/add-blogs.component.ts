import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }



  @Output()
  notifyNewData: EventEmitter<Object> = new EventEmitter<Object>();
  emitNewdata(name, desc, category){
    let data={
      name:name,
      desc:desc,
      category:category,
      time: new Date(),
      authorId: JSON.stringify(JSON.parse(sessionStorage.getItem('id')).id)
    };
    this.notifyNewData.emit(data);
  }

}
