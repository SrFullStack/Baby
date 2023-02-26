import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { BabySiter } from "../models/BabySiter.model";

@Injectable({
  providedIn: 'root'
})
export class BabySiterServiceService {

  constructor(private http:HttpClient) { }
  public GetById(password:string,email:string):Observable<BabySiter>{
  let url="api/BabytSiter?password="+password+"&email="+email; 
  return this.http.get<BabySiter>(url);
  }
  // public GetById(password:string,email:string):Observable<BabySiter>{
  //   let url="api/BabytSiter/"+password; 
  //   return this.http.get<BabySiter>(url);
  //   }
 
}
