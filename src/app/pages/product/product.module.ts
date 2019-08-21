import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {CommonModule} from '@angular/common';
import {AuthGuard} from '../../service/auth.guard';
import {CommonUsageModule} from '../../common/common-usage.module';
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
    CommonUsageModule,
    RouterModule.forChild(productRoutes)
  ],
  declarations: [ProductComponent],
  exports: [RouterModule]
})
export class ProductModule {}
