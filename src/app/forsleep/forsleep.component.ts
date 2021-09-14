import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forsleep',
  templateUrl: './forsleep.component.html',
  styleUrls: ['./forsleep.component.css']
})
export class ForsleepComponent implements OnInit {
   
  forSleep1 = "../../assets/pic/IMG_9852.JPG";
  forSleep2 = "../../assets/pic/IMG_9853.JPG";
  forSleep3 = "../../assets/pic/IMG_0004.JPG";
  forSleep4 = "../../assets/pic/IMG_3409.JPG";
  fullImg = "../../assets/pic/IMG_9852.JPG";

  constructor() { }

  ngOnInit(): void {
  }

  changeImg(url:any){
    this.fullImg=`url/${url}`;
  }
}
