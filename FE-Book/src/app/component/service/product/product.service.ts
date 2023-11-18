import { environment } from './../../../../../enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, IProductDocs } from '../../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<IProductDocs> {
    return this.http.get<IProductDocs>(`${environment.backendUrl}/products`);
  }
  deleteProduct(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>(
      `${environment.backendUrl}/products/` + id
    );
  }
}
