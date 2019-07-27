import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host:string="http://localhost:8081";

  constructor(private httpClient:HttpClient) { }

  public getProducts(page:number, size:number){
    return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
  }

  public getPruductsByKeyWord(mc:string, page:number, size:number){
    return this.httpClient.get(this.host+"//produits/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
  }
  
  public deleteResource(url: string){
    return this.httpClient.delete(url);
  }

  public saveResource(url, data){
    return this.httpClient.post(url,data);
  }

}
