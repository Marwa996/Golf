import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  dataUrl = 'assets/products/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl + 'products.json');
  }
}
