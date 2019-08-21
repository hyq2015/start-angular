import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {CommonUsageModule} from '../../common/common-usage.module';
const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    CommonUsageModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [LoginComponent],
  exports: [RouterModule]
})
export class LoginModule {}
