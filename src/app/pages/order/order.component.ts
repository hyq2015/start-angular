import { Component, OnInit } from '@angular/core';
import {LangService} from '../../service/lang.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private langService: LangService) { }

  ngOnInit() {
  }

}
