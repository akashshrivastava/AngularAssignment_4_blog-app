import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BlogsService } from './blogs.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import { AddBlogsComponent } from './home/add-blogs/add-blogs.component';
import { ShowBlogsComponent } from './home/show-blogs/show-blogs.component'


const approutes = [
  {path:"",redirectTo:'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddBlogsComponent,
    ShowBlogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
