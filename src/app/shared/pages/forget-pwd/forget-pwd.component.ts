import { Component, Inject, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

import { ForgetPasswordService } from '../../services/forgetPassword/forget-password.service';


@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit {
  forgetPwd;
  forgetPwdForm: FormGroup;
  email:string
  constructor(private routeTo:Router, private forgetPwdService:ForgetPasswordService) {

  }

  forgetPwdData(){
    this.forgetPwdService.forgetPwdService(this.email).subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }

  createReg(){
    this.routeTo.navigate(['/register'])
  }

  check() {
    this.forgetPwdForm = new FormGroup({
      'email': new FormControl(),
    })
  }

ngOnInit(): void {
  this.check();
}

}
