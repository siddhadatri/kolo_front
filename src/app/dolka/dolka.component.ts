import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router'
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service'
 
@Component({
  selector: 'app-dolka',
  templateUrl: './dolka.component.html',
  styleUrls: ['./dolka.component.css']
})
export class DolkaComponent implements OnInit {
  public product: Product = {} as Product;

  dol1 = "../../assets/pic/d4.jpg";
  dol2 = "../../assets/pic/d5.jpg";
  dol3 = "../../assets/pic/d3.jpg";
  dol4 = "../../assets/pic/d2.jpg";
  fullImg = "../../assets/pic/d4.jpg";

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly productService: ProductsService
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productService.getProductById(params.id).subscribe((product: Product) => {
        this.product = product;
      })
    });
   }

  ngOnInit(): void {
  }

  changeImg(url:any){
    this.fullImg=`url/${url}`;
  }
}
