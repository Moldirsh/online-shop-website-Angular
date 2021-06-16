import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  searchStr = ''
  productList: Product[] = []
  wishlist: number[] = []
  
  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService,
    private router: Router,
    private route: ActivatedRoute) { }  
   

  ngOnInit(): void {
      this.loadProducts();
      this.loadWishlist();
  }

  loadProducts(){
      this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

  loadWishlist(){
    this.wishlistService.getWishlist().subscribe((productIds) => {
      this.wishlist = productIds;
    })

    this.route.snapshot.data.array.forEach(data => this.productList = data.productList);
  }

}
