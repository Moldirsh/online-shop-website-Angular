import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './modules/authentication-routing.module';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { SpecialComponent } from './special/special.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { AuthGuard } from './guards/auth.guard';
import { ProductCartResolverService } from './guards/product-cart-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ProductsComponent, resolve: { productList: ProductCartResolverService}},
  {path: 'about', component: AboutComponent},
  {path: 'special', component: SpecialComponent, canActivate: [AuthGuard]},
  {path: 'testimonial', component: TestimonialsComponent},
  {path: 'contact', component: ContactComponent, canDeactivate: [CanDeactivateGuard]},
  {path: '**', component: PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthenticationRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
