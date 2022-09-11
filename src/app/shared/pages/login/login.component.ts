import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { UserCoreServiceService } from 'src/app/core/services/user-core-service.service';
// import { DashboardMainComponent } from 'src/app/core/pages/dashboard/dashboard-main/dashboard-main.component';
import { LoginService } from '../../services/login/login.service';
import { ForgetPwdComponent } from '../forget-pwd/forget-pwd.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,private generateToken:UserCoreServiceService, private dialoge:MatDialog, private route:Router, private fb:FormBuilder) { }
// Variable Declaration
  loginForm : FormGroup;
  loginStatus:any
  status:Boolean = true;
// Function Declration

  openDialoge(){
    this.dialoge.open(ForgetPwdComponent,{
      data:{
        Name:'Forget Password'
      }
    })
  }
  onChange(){
    this.status = !this.status
  }
  getLoginControl(){
    this.loginForm = this.fb.group({
      "email": ['',[Validators.required,Validators.email]],
      "password":  ['',[Validators.required,Validators.minLength(6)]]
    })
  }



  postlogin(){
    this.generateToken.gernerateToken().subscribe(
      response=>{
        // console.log(response);
        this.generateToken.setToken(response);
    }
    ,error=>{console.log(error)})

    this.loginService.postlogin(this.loginForm.value).subscribe(res=>{this.loginStatus=res
    console.log(res);
    if(this.loginStatus=='SUCCESS'){
      this.loginStatus='You are Successfully Login at CI SOLUTION';
    }
    this.route.navigate(['dashboard'])
    },
    err=>{
      console.log(err);      
    })
    
  }

  ngOnInit(): void {
    this.getLoginControl()
  }

}
