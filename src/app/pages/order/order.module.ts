import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderComponent} from './order.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from '../../auth/auth.guard';
import {OrderDetailComponent} from './detail/detail.component';
const orderRoutes: Routes = [
  {
    path: '',
    component: OrderComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'detail',
        component: OrderDetailComponent,
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(orderRoutes)
  ],
  declarations: [OrderComponent, OrderDetailComponent],
  exports: [RouterModule]
})
export class OrderModule {}
