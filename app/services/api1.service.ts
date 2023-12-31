import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http :HttpClient) { }
  postMagasin(data : any){
    return this.http.post<any>("http://localhost:3000/productList/",data);
  }
  getMagasin(){
    return this.http.get<any>("http://localhost:3000/productList/");

  }
  deleteMagasin(id:number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id);
  }
  putMagasin(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/productList/"+id,data);
  }
}
