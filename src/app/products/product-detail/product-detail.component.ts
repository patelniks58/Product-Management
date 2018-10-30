import { Product } from './../product.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  @Output() favouriteAdded = new EventEmitter<Product>();

  constructor( private favouriteService: FavouriteService) { }

  ngOnInit() {
  }

  newFavourites(product: Product) {
    this.favouriteService.addToFavourites(product);
  }
  
}
