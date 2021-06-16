import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './modules/authentication.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { SpecialComponent } from './special/special.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './products/cart/cart.component';
import { CartItemComponent } from './products/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { SearchPipe } from './pipes/search.pipe';
import { NavComponent } from './nav/nav.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { NotificationComponent } from './notification/notification.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { AuthGuard } from './guards/auth.guard';
import { ProductCartResolverService } from './guards/product-cart-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    SpecialComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    SearchPipe,
    NavComponent,
    FeaturedProductsComponent,
    NotificationComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthenticationModule
  ],
  providers: [CanDeactivateGuard, AuthGuard, ProductCartResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
