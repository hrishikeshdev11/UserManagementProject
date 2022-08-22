import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UnlockService } from '../../services/unlock/unlock.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent implements OnInit {

  constructor(private unlockService: UnlockService) { }

  // Variable Declaration
  unlockForm: FormGroup
  // Function Declaration
  getUnlockFormControl() {
    this.unlockForm = new FormGroup({
      'email': new FormControl(),
      'tempPwd': new FormControl(),
      'newPassword': new FormControl(),
      'rePassword': new FormControl()
    })
  }

  unlockAccount() {
    this.unlockService.unlockAccount(this.unlockForm.value).subscribe(
      res=>{
        console.log(res)
    },
      err=>{
        console.log(err)
    })
  }

  ngOnInit(): void {
    this.getUnlockFormControl()
  }

}
