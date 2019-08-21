import { Component, OnInit } from '@angular/core';
import {LangService} from '../../service/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private langService: LangService) {
  }

  ngOnInit() {
  }
  onSelectLang(lang) {
    this.langService.setLang(lang);
    sessionStorage.setItem('lang', lang);
  }
}
