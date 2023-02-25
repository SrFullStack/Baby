import { Component, OnInit } from '@angular/core';
import { BabySiterServiceService } from '../Service/baby-siter-service.service';

@Component({
  selector: 'app-baby-siter',
  templateUrl: './baby-siter.component.html',
  styleUrls: ['./baby-siter.component.css']
})
export class BabySiterComponent implements OnInit {
  id:number=0;
  password:string='';
  email:string='';
  
  // public babysrv:BabySiterServiceService
 constructor (){}
  ngOnInit(): void {
  }
  public GetById(){

  }
}
