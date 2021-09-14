import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-futon',
  templateUrl: './futon.component.html',
  styleUrls: ['./futon.component.css']
})
export class FutonComponent implements OnInit {
  
  futon1 = "../../assets/pic/f6.jpg";
  futon2 = "../../assets/pic/f2.JPG";
  futon3 = "../../assets/pic/f3.JPG";
  futon4 = "../../assets/pic/f4.JPG";
  fullImg = "../../assets/pic/f6.jpg";
  constructor() { }

  ngOnInit(): void {
  }

  changeImg(url:any){
    this.fullImg=`url/${url}`;
  }
}
