import { Component, OnInit } from '@angular/core';
import {LangService} from '../../service/lang.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lang: string;
  constructor(private langService: LangService) {
  }
  ngOnInit() {

  }

}
