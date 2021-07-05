import { Component, TemplateRef, OnInit } from '@angular/core';
import { Product } from 'src/app/_Models/Product';
import { ProductsRepository } from 'src/app/_Services/ProductsRepository';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  currentProduct: Product = new Product();
  repository: ProductsRepository;
  toast: ToastrService;
  private products: Product[];

  constructor(repository: ProductsRepository, toast: ToastrService) {
    this.repository = repository;
    this.toast = toast;
  }

  ngOnInit() {
    this.refreshList();
  }

  refreshList(): void {
    this.repository.Get('').subscribe(x => {
      this.products = x;
    });
  }

  Delete(productID: number) {
    this.repository.Delete(productID)
      .then(x => {
        this.toast.success('Produto excluído com sucesso');
        this.refreshList();
      })
      .catch(x => {
        this.toast.error('Erro ao tentar remover o produto')
        this.refreshList();
      });
  }


  private productToDelete: number = 0;
  openConfirmDeleteProduct(productID: number) {
    this.productToDelete = productID;
  }
 
  confirmDeleteProduct(): void {
    this.Delete(this.productToDelete);
    this.hideConfirmDeleteProduct();
  }
 
  hideConfirmDeleteProduct(): void {
    this.productToDelete = 0;
  } 
}