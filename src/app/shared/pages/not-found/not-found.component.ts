import { Component, OnInit } from '@angular/core';
import { UserCoreServiceService } from 'src/app/core/services/user-core-service.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private gentoken:UserCoreServiceService) { }

  genFun(){
    this.gentoken.gernerateToken().subscribe(res=>{
      this.gentoken.setToken(res),console.log(res)
    },
    err=>{
      console.log(err)
    })
  }
  

  ngOnInit(): void {
  }

}
