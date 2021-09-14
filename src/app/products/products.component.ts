import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap  } from '@angular/router'
import { Product } from '../models/product.model';
import { switchMap, tap } from 'rxjs/operators'
import { ProductsService } from '../services/products.service'
import { EMPTY, Observable, of } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Array<Product> = [];

  public imagesPaths: { [key: string]: string } = {
    product1round: "../../assets/pic/Ellipse21.png",
    product2dolka: "../../assets/pic/Ellipse22.png",
    product3forsleep: "../../assets/pic/Ellipse24.png",
    product4square: "../../assets/pic/Ellipse23.png",
    product5futon: "../../assets/pic/Ellipse10(3).png",
    product6bolster: "../../assets/pic/Ellipse10(2).png",
    product7matras: "../../assets/pic/Ellipse10(5).png",
    product8bag: "../../assets/pic/Ellipse10(6).png",
    product9sale: "../../assets/pic/Ellipse10(4).png",
  }
  // product1round = "../../assets/pic/Ellipse21.png";
  // product2dolka = "../../assets/pic/Ellipse22.png";
  // product3forsleep = "../../assets/pic/Ellipse24.png";
  // product4square = "../../assets/pic/Ellipse23.png";
  // product5futon = "../../assets/pic/Ellipse10(3).png";
  // product6bolster = "../../assets/pic/Ellipse10(2).png";
  // product7matras = "../../assets/pic/Ellipse10(5).png";
  // product8bag = "../../assets/pic/Ellipse10(6).png";
  // product9sale = "../../assets/pic/Ellipse10(4).png";

  constructor(
    private activeRoute: ActivatedRoute,
    private readonly productService: ProductsService
  ) {
    this.productService.getProducts().subscribe((products: any) => {
      this.products = products.products;
    })
   }

  ngOnInit() {}

}
