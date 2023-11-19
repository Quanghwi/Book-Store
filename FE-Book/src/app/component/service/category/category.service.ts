import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../interface/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCate(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/categories');
  }
  addCategory(category: any) {
    return this.http.post('http://localhost:8000/api/categories', category);
  }
  deleteCategory(id: number | string): Observable<ICategory> {
    return this.http.delete<ICategory>('http://localhost:8088/api/categories/' + id);
  }
}
