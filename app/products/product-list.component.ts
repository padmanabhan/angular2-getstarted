import { Component, OnInit } from 'angular2/core';

import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: 'app/products/product-list.component.html',
  directives: [StarComponent],
  pipes: [ProductFilterPipe]
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Products List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = "";
  errorMessage: string;
  products: IProduct[];

  constructor(private _productService: ProductService) {

  }

  ngOnInit() : void {
    this._productService.getProducts()
              .subscribe(
                products => this.products = products,
                error =>  this.errorMessage = <any>error);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
