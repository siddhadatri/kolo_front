import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  img = "";
  title = "";
  amount = "";
  price = "";

  constructor(
    private route: ActivatedRoute,
    public cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  // addToCart(product) {
  //   this.cartService.addToCart(product);
  // }

}

//RESOLVER
// export class CartComponent implements OnInit {

//   empList: any[] = [];

//   constructor(private _routes: ActivatedRoute) { }

//   ngOnInit(): void {
//     this._routes.data.subscribe((response: any) => {
//       this.empList = response.employees;
//     })
//   }
// }