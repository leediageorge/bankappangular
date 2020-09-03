import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountDetails={
    1001:{name:"user1",acno:1001,pin:4387,password:"userone",balance:3000},
    1002:{name:"user2",acno:1002,pin:1234,password:"usertwo",balance:3500},
1003:{name:"user3",acno:1003,pin:1598,password:"userthree",balance:4000},
1004:{name:"user4",acno:1004,pin:1095,password:"userfour",balance:3050},
1005:{name:"user5",acno:1005,pin:1098,password:"userfive",balance:300}

}
acno="";
pwd="";
  constructor() { }
  acnoChange(event){
   this.acno= event.target.value;
  }
  pwdChange(event){
  
   this.pwd= event.target.value;
  }
  
  login(){
  var acno=parseInt(this.acno);//document.querySelector("#acno").value
  var password=this.pwd;//document.querySelector("#pwd").value
  //alert(acno+","+password)
  try{
    if(isNaN(acno)) throw "invalid Account Number"
    if(acno.toString().length<2) throw "Account number must be atleast 4 charactors"

  }catch(error){
    alert(error)
  }
  var data=this.accountDetails;
  if (acno in data){
    var pwd = data[acno].password
    if (pwd==password){
      alert("login successful")
      window.location.href="userhome.html"
    }
  }
  }

}
