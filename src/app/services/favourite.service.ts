import { Injectable } from '@angular/core';
import { Product } from '../products/product.interface';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor() { }

  private favourites: Set<Product> = new Set();
/**
 * 
 * @param product 
 */
  addToFavourites(product: Product): void {
    this.favourites.add(product);
  }

  getFavouritesNb() : number {
    return this.favourites.size;
  }
}
