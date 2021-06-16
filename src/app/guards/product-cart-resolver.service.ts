import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot,  Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import {ProductService} from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCartResolverService implements Resolve <any>{
    constructor(private productService: ProductService){}
    resolve(){
        return this.productService.getProducts();
    }
}
