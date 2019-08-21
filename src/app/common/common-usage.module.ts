import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from '../pipes/translatepipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from '../components/header/header.component';
import {NavComponent} from '../components/nav/nav.component';
@NgModule({
  declarations: [HeaderComponent, NavComponent, TranslatePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    TranslatePipe,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CommonUsageModule { }
