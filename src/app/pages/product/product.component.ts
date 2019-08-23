import { Component, OnInit } from '@angular/core';
import {LangService} from '../../service/lang.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private langService: LangService) {
  }

  ngOnInit() {


  }

}
