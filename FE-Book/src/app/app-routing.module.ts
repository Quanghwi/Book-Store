import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './component/layouts/client-layout/client-layout.component';
import { HomePageComponent } from './component/pages/client/home-page/home-page.component';
import { ProductPageComponent } from './component/pages/client/product-page/product-page.component';
import { DetailProductComponent } from './component/pages/client/detail-product/detail-product.component';
import { AdminLayoutComponent } from './component/layouts/admin-layout/admin-layout.component';
import { DashBoardComponent } from './component/pages/admin/dash-board/dash-board.component';
import { ManagerProductsComponent } from './component/pages/admin/Products/manager-products/manager-products.component';
import { AddProductComponent } from './component/pages/admin/Products/add-product/add-product.component';
import { UpdateProductComponent } from './component/pages/admin/Products/update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'products',
        component: ProductPageComponent,
      },
      {
        path: 'products/:id',
        component: DetailProductComponent,
      },
    ],
  },
  {
    path: 'manager',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'products', component: ManagerProductsComponent },
      { path: 'addProduct', component: AddProductComponent },
      { path: 'products/:_id/update', component: UpdateProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
