import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './notfound.component';
const notfoundRoutes: Routes = [
  {
    path: '',
    component: NotfoundComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(notfoundRoutes)
  ],
  declarations: [NotfoundComponent]
})
export class NotFoundModule {}
