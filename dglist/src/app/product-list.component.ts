import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];

  constructor(
     private productService: ProductService
   ) { }

 ngOnInit() {
     this.productService
            .all()
       .subscribe(products => this.products = products);
   }

   like(product: Product) {
  this.productService
    .like(product)
    .subscribe((success) => {
      if (success) product.likes += 1;
    }, (error) => {
      console.log(error);
    });
}
  }
