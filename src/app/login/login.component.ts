import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 data="Happy banking with us"
 data1="Enter account number"
 constructor()
 {

 }
 ngOnInit(): void {
   
 }
 login()
 {
  alert("login clicked")
 }
 acnoChange(event:any)
 {
  // console.log(event);   it gives an object.to get the exact value
  
   console.log(event.target.value);
  
 }
 pswdChange(event:any)
 {
  console.log(event.target.value);
  
 }

}
