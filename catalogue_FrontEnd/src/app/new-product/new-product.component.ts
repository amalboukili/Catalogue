import { Product } from './../../model/product.model';
import { CatalogueService } from './../services/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public currentProduct:Product;
  mode: number=1;
  constructor(private catService:CatalogueService, private router:Router) { }

  ngOnInit() {
  }

  onSaveProduct(data:any){
    this.catService.saveResource(this.catService.host + "/produits", data)
    .subscribe((res:Product)=>{
      // this.router.navigateByUrl("/products");
      this.currentProduct=res;
      this.mode=2;
    }, err=>{
      console.log(err);
    })
  }

  onNewProduct(){
    this.mode=1;
  }

}
