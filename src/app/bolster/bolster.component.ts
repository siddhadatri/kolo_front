import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolster',
  templateUrl: './bolster.component.html',
  styleUrls: ['./bolster.component.css']
})
export class BolsterComponent implements OnInit {

  bol1 = "../../assets/pic/IMG_6910.jpg";
  bol2 = "../../assets/pic/b1.JPG";
  bol3 = "../../assets/pic/b2.JPG";
  bol4 = "../../assets/pic/b3.JPG";
  fullImg = "../../assets/pic/IMG_6910.jpg";

  constructor() { }

  ngOnInit(): void {
  }
  
  changeImg(url:any){
    this.fullImg=`url/${url}`;
  }
}
