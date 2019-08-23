import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderComponent} from './order.component';
import {CommonModule} from '@angular/common';
import {AuthGuard} from '../../service/auth.guard';
import {OrderDetailComponent} from './detail/detail.component';
import {CommonUsageModule} from '../../common/common-usage.module';
const orderRoutes: Routes = [
  {
    path: '',
    component: OrderComponent,
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    // children: [
    //   {
    //     path: 'detail',
    //     component: OrderDetailComponent,
    //   }
    // ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    CommonUsageModule,
    RouterModule.forChild(orderRoutes)
  ],
  declarations: [OrderComponent, OrderDetailComponent],
  // exports: [RouterModule]
})
export class OrderModule {}
