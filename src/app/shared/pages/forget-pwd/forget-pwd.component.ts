import { Component, Inject, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { exit } from 'process';


@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit {
  forgetPwd;
  forgetPwdForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data, private routeTo:Router) {
    this.forgetPwd = data.Name
  }

  createReg(){
    this.routeTo.navigate(['/register'])
  }

  check() {
    this.forgetPwdForm = new FormGroup({
      
    })
  }

ngOnInit(): void {
}

}
