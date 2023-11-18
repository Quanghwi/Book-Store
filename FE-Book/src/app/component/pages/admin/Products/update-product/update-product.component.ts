import { Component } from '@angular/core';
import { IProduct } from 'src/app/component/interface/product';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/component/service/product/product.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    price: 0,
    quantity: 0,
    description: '',
    author: '',
    publishing: '',
    images: [''],
  });
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      const _id = params.get('_id');
      console.log(_id);
      this.productService.getProduct(_id).subscribe((product) => {
        this.product = product;
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          description: product.description,
          publishing: product.publishing,
          author: product.author,
          images: product.images[0].url,
        });
      });
    });
    console.log(this.productForm.value);
  }
  onHandleEdit() {
    if (this.productForm.valid) {
      const product: any = {
        _id: this.product._id,
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        quantity: this.productForm.value.quantity || 0,
        description: this.productForm.value.description || '',
        publishing: this.productForm.value.publishing || '',
        author: this.productForm.value.author || '',
        images: this.productForm.value.images || '',
      };

      this.productService.updateProduct(product).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['admin/products']);
        },
        (error) => console.log(error.message)
      );
    }
  }
}
