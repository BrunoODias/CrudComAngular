import { HttpClient } from "@angular/common/http";
import { Inject } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../_Models/Product";

export class ProductsRepository {
    private http: HttpClient;
    private url: string;

    constructor(_http: HttpClient, @Inject('BASE_URL') baseurl: string) {
        this.http = _http;
        this.url = baseurl;
    }

    public Get(parameter: string | null): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.url}api/products/products?param=${parameter}`);
    }

    public Post(product: Product): Promise<boolean> {
        return new Promise((resolve,reject) => {
            this.http.post(`${this.url}api/products/add`,product)
            .subscribe(
                ()=>resolve(true),
                ()=>reject(false)
            );
        });
    }

    public Edit(product: Product): Promise<boolean> {
        return new Promise((resolve,reject) => {
            this.http.put(`${this.url}api/products/edit`,product)
            .subscribe(
                ()=>resolve(true),
                ()=>reject(false)
            );
        });
    }

    public Delete(productId: Number): Promise<boolean> {
        return new Promise((resolve,reject) => {
            this.http.delete(`${this.url}api/products/Delete?productID=${productId}`)
            .subscribe(
                ()=>resolve(true),
                ()=>reject(false)
            );
        });
    }
}