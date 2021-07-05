import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/_Models/Product';
import { ProductsRepository } from 'src/app/_Services/ProductsRepository';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

  private product = new Product();
  private repository: ProductsRepository;
  private toast: ToastrService;
  private router: Router;

  constructor(route: ActivatedRoute, _repository: ProductsRepository, toast: ToastrService, router: Router) {
    route.queryParams.subscribe(x => {
      this.product.productID = x['productID'];
      this.product.name = x['name'];
      this.product.price = x['price'];
      this.product.description = x['description'];
    });
    this.repository = _repository;
    this.toast = toast;
    this.router = router;
  }

  Save() {
    if (this.product.productID == 0)
      this.repository.Post(this.product)
        .then(x => {
          this.toast.success('Produto salvo com sucesso');
          this.router.navigate(['/products']);
        })
        .catch(x =>
          this.toast.error('Erro ao tentar adicionar o produto')
        );
    else
      this.repository.Edit(this.product)
        .then(x => {
          this.toast.success('Produto salvo com sucesso');
          this.router.navigate(['/products']);
        })
        .catch(x =>
          this.toast.error('Erro ao tentar editar o produto')
        );
  }
}