import { Component, OnInit } from '@angular/core';
import { BaseRouteReuseStrategy } from '@angular/router';
import { BabySiter } from '../models/BabySiter.model';
import { BabySiterServiceService } from '../Service/baby-siter-service.service';

@Component({
  selector: 'app-baby-siter',
  templateUrl: './baby-siter.component.html',
  styleUrls: ['./baby-siter.component.css']
})
export class BabySiterComponent implements OnInit {
  idd:number=0;
  password:string='';
  email:string='';

 constructor (public BabySrv:BabySiterServiceService){}
  ngOnInit(): void {
  }
  public GetById(){
this.idd=this.idd;
this.password=this.password;
this.email=this.email;
this.BabySrv.GetById(this.password,this.email).subscribe((res:BabySiter)=>{
alert(res);
 
})

  }
}
