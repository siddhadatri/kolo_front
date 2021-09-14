import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sale1 = "../../assets/pic/zefir.jpg";
  fullImg = "../../assets/pic/zefir.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  changeImg(url:any){
    this.fullImg=`url/${url}`;
  }
}
