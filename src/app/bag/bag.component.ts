import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  bag1Img = "../../assets/pic/s1.JPG";
  bag2Img = "../../assets/pic/s2.JPG";
  bag3Img = "../../assets/pic/s3.JPG";
  bag4Img = "../../assets/pic/s4.JPG";
  fullImg = "../../assets/pic/s1.JPG";

  constructor(private readonly productService: ProductsService) {}

  ngOnInit(): void {
  }
  changeImg(url:any){
    this.fullImg=`url/${url}`;
  }
}
