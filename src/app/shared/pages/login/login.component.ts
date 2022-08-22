import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { LoginService } from '../../services/login/login.service';
import { ForgetPwdComponent } from '../forget-pwd/forget-pwd.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private dialoge:MatDialog) { }
// Variable Declaration
  loginForm : FormGroup
  loginStatus:any
// Function Declration

  openDialoge(){
    this.dialoge.open(ForgetPwdComponent,{
      data:{
        Name:'Forget Password'
      }
    })
  }

  getLoginControl(){
    this.loginForm = new FormGroup({
      "email": new FormControl(),
      "pwd":  new FormControl()
    })
  }

  postlogin(){
    this.loginService.postlogin(this.loginForm.value).subscribe(res=>{this.loginStatus=res
    console.log(res);
    if(this.loginStatus=='SUCCESS'){
      this.loginStatus='You are Successfully Login at CI SOLUTION';
    }
    },
    err=>{
      console.log(err);      
    })
    
  }

  ngOnInit(): void {
    this.getLoginControl()
  }

}
