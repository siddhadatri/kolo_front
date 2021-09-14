import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  sqr1 = "../../assets/pic/IMG_6917.jpg";
  sqr2 = "../../assets/pic/4p.JPG";
  sqr3 = "../../assets/pic/5p.JPG";
  sqr4 = "../../assets/pic/3p.JPG";
  fullImg = "../../assets/pic/IMG_6917.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  changeImg(url:any){
    this.fullImg=`url/${url}`;
  }
}
