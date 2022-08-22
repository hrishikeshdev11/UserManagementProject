import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Alert } from 'selenium-webdriver';
import { UserCoreServiceService } from 'src/app/core/services/user-core-service.service';
import { RegistrationService } from '../../services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private regCoreServices: UserCoreServiceService, private regFormSubmit:RegistrationService) { }
  // Variable Declaration
  countries: any
  states: any
  cities: any
  registrationForm: FormGroup
  emailcheck:any
  regStatus:any
  // Function Declaration
  getRegistrationControl() {
    this.registrationForm = new FormGroup({
      'cityId': new FormControl(),
      'countryId': new FormControl(),
      'dob': new FormControl(),
      'email': new FormControl(),
      'fname': new FormControl(),
      'gender': new FormControl(),
      'lname': new FormControl(),
      'phno': new FormControl(),
      'stateId': new FormControl()
    })
  }

  checkEmail(email){
    this.regCoreServices.checkEmail(email).subscribe(res=>{this.emailcheck=res,
      console.log(res);
      
    },
    err=>{
      console.log(err);      
    })
    if (email==''||email==true) {
      this.emailcheck='';
      if (this.emailcheck=='UNIQUE') {
        this.emailcheck='this email can be use'
      }
      if (this.emailcheck=='DUPLICATE') {
        this.emailcheck='this email can be use'
      }
    }      
  }

  postRegistrationData(){
    this.regFormSubmit.postRegistrationSubmit(this.registrationForm.value).subscribe(res=>{this.regStatus=res,console.log(res)},err=>{console.log(err);
    })
    console.log('Submit Runs');
  }

  getCountryData() {
    this.regCoreServices.getCountryData().subscribe(res => {
      this.countries = res, console.log(res)
    },
      err => {
        console.log(err)
      })
  }
  getStateDataByCountryID(id) {
    this.regCoreServices.getStateDataByCountryID(id).subscribe(res => {
      this.states = res, console.log(res)
    },
      err => {
        console.log(err)
      })
  }
  getCityDataByStateID(id) {
    this.regCoreServices.getCityDataByStateID(id).subscribe(res => {
      this.cities = res, console.log(res)
    },
      err => {
        console.log(err)
      })
  }

  ngOnInit(): void {
    this.getCountryData(),
    this.getRegistrationControl() 
  }

}
