import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonUsageModule} from './common/common-usage.module';
import {ProductComponent} from './pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent
  ],
  imports: [
    BrowserModule,
    CommonUsageModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
