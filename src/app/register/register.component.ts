import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
//import { registerLocaleData } from '@angular/common';
//import { getParseErrors } from '@angular/compiler';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // name="";
  //acno="";
  //pin="";
  //pwd="";
  registerForm = this.fb.group({
    name:['',[ Validators.required ]],
    acno:['',[ Validators.required,Validators.minLength(3) ]],
    pin:['',[ Validators.required ]],
    pwd:['',[Validators.required ]],
  
  });

  constructor( private dataService:DataService,
    private router:Router ,
    private fb:FormBuilder ) { }


  ngOnInit(): void {
  }

getError(field){
  return (this.registerForm.get(field).touched||this.registerForm.get(field).dirty)&&this.registerForm.get(field).errors
}
register(){
 if(this.registerForm.valid){
    //const result = this.dataService.register(this.name,this.acno,this.pin,this.pwd)
      //if(result){
        //alert("Successfully created account.please login");
        //this.router.navigateByUrl("");
        //if(this.registerForm.valid){
          const result = this.dataService.register(this.registerForm.value.name,this.registerForm.value.acno,this.registerForm.value.pin,this.registerForm.value.pwd)
            if(result){
            alert("Successfully created account.please login");
           this.router.navigateByUrl("");
           }
}
 else{
   alert("form is invalid");
 }
}
}