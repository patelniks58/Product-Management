import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, flatMap, first, catchError, shareReplay, switchMap } from 'rxjs/operators';
import { Product } from '../products/product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl : string = 'http://storerestservice.azurewebsites.net/api/products/';

  constructor(private http: HttpClient) 
  { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
