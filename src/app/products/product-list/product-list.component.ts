import { Product } from './../product.interface';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ProductListComponent implements OnInit {

    title: string = "Products";
    //products: Product[];
    products$: Observable<Product[]>;
    selectedProduct: Product;


    onSelect(product: Product): void {
        this.selectedProduct = product;
    
    }

    message: string = "";

    newFavourite(product: Product): void {
        this.message = `Product
                        ${product.name} 
                        added to your favourites!`;
    }
    get favourites(): number{
        return this.favouriteService.getFavouritesNb();
    }

    constructor(
        private productService: ProductService,
        private favouriteService: FavouriteService
        )
    {
        
    }

    ngOnInit() {
        // this
        // .productService
        // .getProducts()
        // .subscribe(
        //     results => this.products = results
        // );
        this.products$ = this.productService.getProducts();

    }
    
}
