import { CatalogueService } from './../services/catalogue.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  
  public produits:any;
  public size:number=5;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  currentKeyword: string="";


  constructor(private CatService:CatalogueService) { }

  ngOnInit() {

  }

  onGetProducts(){
    this.CatService.getProducts(this.currentPage,this.size)
    .subscribe(data=>{
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      this.produits=data;
    },err=>{
      console.log(err);
    });
  }

  onPageProduct(i){
    this.currentPage=i;
    this.chercherProduits();
  }

  onChercher(form :any){
    this.currentPage=0;
    this.currentKeyword=form.keyword;
    this.chercherProduits();
  }

  chercherProduits(){
    this.CatService.getPruductsByKeyWord(this.currentKeyword ,this.currentPage,this.size)
    .subscribe(data=>{
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      this.produits=data;
    },err=>{
      console.log(err);
    });
    }

    onDeleteProduct(p){
      let conf=confirm("Vous êtes entrain de supprimer ce produit, êtes vous sur???");
      if(conf){
        this.CatService.deleteResource(p._links.self.href)
        .subscribe(data=>{
          this.chercherProduits();
        }, err=>{
          console.log(err);
        })
      }
    }

}
