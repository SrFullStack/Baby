import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BabySiterServiceService {

  constructor(private http:HttpClient) { }
  // public get() :Observable<Present[]>{
  //   let url="api/Presents";
  //   return this.http.get<Present[]>(url)
  //   .pipe(map((res: Present[]) => {
  //     this.saveList(res);
  //     return res;
  // }))// this.bankList;
}
