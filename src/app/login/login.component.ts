import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 data="Happy banking with us"
 data1="Enter account number"
 acno:any
 pwd:any
 constructor(private rout:Router)
 {

 }
 ngOnInit(): void {
   
 }
 login()
 {
  // alert("login clicked")
  // console.log(this.acno);
  // console.log(this.pwd);
  
  this.rout.navigateByUrl("home")

 }



//  acnoChange(event:any)
//  {
//   // console.log(event);   it gives an object.to get the exact value
  
//    console.log(event.target.value);
  
//  }
//  pswdChange(event:any)
//  {
//   console.log(event.target.value);
  
//  }

}
