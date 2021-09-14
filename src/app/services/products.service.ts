import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'any' })
export class ProductsService {
    constructor(private readonly http: HttpClient) {}

    public getProducts(): Observable<Array<Product>> {
        return this.http.get<Array<Product>>('http://localhost:8080/api/products');
    }

    public getProductById(productId: number):Observable<Product> {
        return this.http.get<Product>(`http://localhost:8080/api/products/${productId}`);
    }

}