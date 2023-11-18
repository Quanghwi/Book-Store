import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/component/interface/product';
import { ProductService } from 'src/app/component/service/product/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(
    private formBuilder: FormBuilder,
    private service: ProductService,
    private router: Router
  ) {}

  // productForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   img: new FormControl(''),
  //   description: new FormControl('')
  // })
  productForm = this.formBuilder.group({
    name: [''],
    price: 0,
    quantity: 0,
    description: '',
    author: '',
    publishing: '',
    images: [''],
  });

  AddProduct() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      const product: any = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        quantity: this.productForm.value.quantity || 0,
        description: this.productForm.value.description || '',
        publishing: this.productForm.value.publishing || '',
        author: this.productForm.value.author || '',
        images: this.productForm.value.images || '',
      };
      this.service.addProduct(product).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/admin/products']);
      });
    }
  }
}
