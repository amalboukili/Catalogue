import { CatalogueService } from './../services/catalogue.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  public produits:any;
  constructor(private CatService:CatalogueService) { }

  ngOnInit() {

  }

  onGetProducts(){
    this.CatService.getProducts()
    .subscribe(data=>{
      this.produits=data;
    },err=>{
      console.log(err);
    });
  }

}
