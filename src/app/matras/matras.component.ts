import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matras',
  templateUrl: './matras.component.html',
  styleUrls: ['./matras.component.css']
})
export class MatrasComponent implements OnInit {

  mat1 = "../../assets/pic/m1.JPG";
  mat2 = "../../assets/pic/m2.JPG";
  mat3 = "../../assets/pic/m3.JPG";
  mat4 = "../../assets/pic/m4.JPG";
  fullImg = "../../assets/pic/m1.JPG";

  constructor() { }

  ngOnInit(): void {
  }

  changeImg(url:any){
    this.fullImg=`url/${url}`;
  }
}
