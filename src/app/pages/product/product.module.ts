import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from '../../auth/auth.guard';
const productRoutes: Routes = [
  {
    path: '',
    component: ProductComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [ProductComponent],
  exports: [RouterModule]
})
export class ProductModule {}
