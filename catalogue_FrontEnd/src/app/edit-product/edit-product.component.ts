import { Product } from 'src/model/product.model';
import { CatalogueService } from './../services/catalogue.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
 currentProduct: Product;
  url: string;

  constructor(private router:Router, 
              private activatedRoute:ActivatedRoute, 
              private catService: CatalogueService) { }

  ngOnInit() {
    this.url=atob(this.activatedRoute.snapshot.params.id)
    this.catService.getResource(this.url)
    .subscribe(data=>{
      this.currentProduct=data;
    }, err=>{
      console.log(err);
    })
  }

  onUpdaeProduct(value){
    this.catService.updateResource(this.url, value)
    .subscribe(data=>{
      alert("Mise à jour effectuée avec succés !");
      this.router.navigateByUrl("/products");
    },err=>{
      console.log(err);
    })
  }

}
