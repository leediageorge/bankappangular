import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails={
    1001:{name:"user1",acno:1001,pin:4387,password:"userone",balance:3000,transactions:[]},
    1002:{name:"user2",acno:1002,pin:1234,password:"usertwo",balance:3500,transactions:[]},
1003:{name:"user3",acno:1003,pin:1598,password:"userthree",balance:4000,transactions:[]},
1004:{name:"user4",acno:1004,pin:1095,password:"userfour",balance:3050,transactions:[]},
1005:{name:"user5",acno:1005,pin:1098,password:"userfive",balance:300,transactions:[]}

}
currentUser;
  constructor() { 
    alert("loaded");
    this.getDetails();
  }
  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails));
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser));

    }
  }
  getTransactions(){
    return this.accountDetails[this.currentUser.acno].transactions;
  }
  getDetails(){
    if(localStorage.getItem("accountDetails")){
      this.accountDetails=JSON.parse(localStorage.getItem("accountDetails"));
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser"));

    }
  }
  register(name,acno,pin,password){
    if (acno in this.accountDetails){
      alert("Account numberalready exists.please login");
      return false;
    }
    this.accountDetails[acno]={
      name,
      acno,
      pin,
      password,
      balance:0,
      transactions:[]
    }
    this.saveDetails();
    return true;
  }
  login(acno1,password){
   // alert("acno+password")
    var acno=parseInt(acno1);
    var data=this.accountDetails;
    if(acno in data){
      var pwd=data[acno].password
      if(pwd==password){
        this.currentUser=data[acno];
        this.saveDetails();
        return true;
      }
    }

  }
  deposit(dpacno,dppin,dpamt){
    var data=this.accountDetails;
    if(dpacno in data){
      var mpin=data[dpacno].pin
      if(dppin==mpin){
        data[dpacno].balance+=parseInt(dpamt);
        this.saveDetails();
        return{
          status:true,
          message:"account has been credited",
          balance:data[dpacno].balance
        }
      }
    }
    else{
      return{
        status:false,
        message:"incorrect account Details"
      }
    }
  }
  withdraw(wacno,wpin,wamt){
    console.log(wacno,wpin,wamt)
    var data=this.accountDetails;
    if(wacno in data){
      var mpin=data[wacno].pin
      if(data[wacno].balance<parseInt(wamt)){
        return{
          status:false,
          message:"insufficient balance",
          balance:data[wacno].balance
        }
      }
      else if(wpin==mpin){
        data[wacno].balance-=parseInt(wamt)
        data[wacno].transactions.push({
          amount:wamt,
          type:'Debit'
        })
        this.saveDetails();
        return{
          status:true,
          message:"account has been debited",
          balance:data[wacno].balance
        }
      }
    }
else{
  return{
    status:false,
    message:"incorrect account details"
  }
}
  }
}  

// console.log(wacno,wpin,wamt)
// var data=this.accountDetails;
// if(wacno in data){
//   var mpin=data[wacno].pin
//   if(data[wacno].balane<parseInt(wamt)){
//     return{
//       status:false,
//       message:"insufficient balance",
//       balance:data[wacno].balance
//     }
//   }
//   else if(wpin==mpin){
//     data[wacno].balance=parseInt(wamt)
//     this.saveDetails();
//     return{
//       status:true,
//       message:"account has been debited",
//       balance:data[wacno].balance
//     }
//   }
// }
// else{
//   return{
//     status:false,
//     message:"incorrect accountdetails"
//   }
// }