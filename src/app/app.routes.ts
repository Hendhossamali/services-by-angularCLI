import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    { path : '' , component: HomeComponent} ,
    { path: 'products' , component: ProductsComponent},
    { path: 'register' , component: RegisterFormComponent},
    { path: 'cart' , component: CartPageComponent},
    { path: 'product/:id' , component: ProductDetailsComponent}
];
