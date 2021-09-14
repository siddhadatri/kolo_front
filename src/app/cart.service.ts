import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    public readonly productsUpdated = new Subject<any>();

    constructor() {} 

      addToCart(product: any) {
        const existedProducts = this.getProducts();
        const updatedProducts = {
          ...existedProducts,
          [product.id]: product
        };
        localStorage.setItem('product', updatedProducts);
        this.productsUpdated.next(updatedProducts);
      }

      getProducts(): any {
        return localStorage.getItem('products');
      }

      removeProduct(productId: any): any {
        const existedProducts = this.getProducts();
        delete existedProducts[productId];
        localStorage.setItem('product', existedProducts);
        this.productsUpdated.next(existedProducts);
      }

      getProduct(productId: any): any {
        return localStorage.getItem('products')?.[productId];
      }
    
      clearCart() {
        localStorage.clear();
        this.productsUpdated.next([]);
      }
      
}