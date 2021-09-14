import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })

export class ProductResolver implements Resolve<Observable<Product> | Observable<Array<Product>>> {
    constructor(
        private readonly productService: ProductsService
    ) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const productId = route.paramMap.get('id');

        if (productId) {
            return this.productService.getProductById(+productId);
        } else {
            return this.productService.getProducts();
        }
    }
  }