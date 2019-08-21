import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './notfound.component';
import {CommonUsageModule} from '../../common/common-usage.module';
const notfoundRoutes: Routes = [
  {
    path: '',
    component: NotfoundComponent
  }
];
@NgModule({
  imports: [
    CommonUsageModule,
    RouterModule.forChild(notfoundRoutes)
  ],
  declarations: [NotfoundComponent]
})
export class NotFoundModule {}
