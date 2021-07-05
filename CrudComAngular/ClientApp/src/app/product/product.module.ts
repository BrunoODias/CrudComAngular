import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { RouterModule } from '@angular/router';
import { ProductsRepository } from '../_Services/ProductsRepository';
import { FormsModule }   from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [ProductListComponent, NewProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [ProductsRepository,BsModalService]
})
export class ProductModule { }
