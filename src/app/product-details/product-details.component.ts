import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products/products.service';
import { Product } from '../shared/models/Product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productId: number | undefined;
  productDetails:Product | undefined;

  constructor(private activatedRoute: ActivatedRoute, private productService :ProductsService){
    this.activatedRoute.params.subscribe(params => {
      this.productId =Number( params['id']);
      this.productService.getProductById(this.productId).then((product)=>{
            this.productDetails=product;
      })

    })
  }
}
