import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from '../pipes/translatepipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from '../components/header/header.component';
import {NavComponent} from '../components/nav/nav.component';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [HeaderComponent, NavComponent, TranslatePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    TranslatePipe,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class CommonUsageModule { }
