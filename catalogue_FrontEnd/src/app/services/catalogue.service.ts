import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private httpClient:HttpClient) { }

  public getProducts(){
    return this.httpClient.get("http://localhost:8081/produits");
  }
}
