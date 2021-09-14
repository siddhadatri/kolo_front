import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {
  zafuPillow = "../../assets/pic/black.jpg";
  petrolRound = "../../assets/pic/blue.jpg";
  violetRound = "../../assets/pic/20.jpg" ;
  beigeStrikt = "../../assets/pic/23.jpg";
  fullImg = "../../assets/pic/black.jpg";
  constructor() { }

  ngOnInit(): void {
  }

  changeImg(url:any){
    this.fullImg=`url/${url}`;
  }
}