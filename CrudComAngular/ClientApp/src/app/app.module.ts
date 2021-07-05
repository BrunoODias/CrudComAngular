import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductModule } from './product/product.module';
import { NewProductComponent } from './product/new-product/new-product.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ProductModule,
    RouterModule.forRoot([
      { path: 'products/products', component: ProductListComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/new', component: NewProductComponent }
    ]),
    BrowserAnimationsModule, // ToastrModule required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
