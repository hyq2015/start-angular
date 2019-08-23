import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './pages/product/product.component';

const routes: Routes = [
  {
    path: 'product',
    // component: ProductComponent
    loadChildren: () => import('./pages/product/product.module').then(mod => mod.ProductModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then(mod => mod.OrderModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: '404',
    loadChildren: () => import('./pages/notfound/notfound.module').then(mod => mod.NotFoundModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
