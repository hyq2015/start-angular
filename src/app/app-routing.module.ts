import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PATH} from './common/router-path-constants';

const routes: Routes = [
    {
        path: PATH.product,
        loadChildren: () => import('./pages/product/product.module').then(mod => mod.ProductModule)
    },
    {
        path: PATH.order,
        loadChildren: () => import('./pages/order/order.module').then(mod => mod.OrderModule)
    },
    {
        path: PATH.login,
        loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)
    },
    {
        path: PATH.notFound,
        loadChildren: () => import('./pages/notfound/notfound.module').then(mod => mod.NotFoundModule)
    },
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: '**',
        redirectTo: PATH.notFound
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
