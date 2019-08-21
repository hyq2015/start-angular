import {Injectable} from '@angular/core';
const langData = require('../../assets/multi-lang.json'),
  ALL_KEYS = Object.keys(langData),
  ALL_KEY_OBJ = {};

ALL_KEYS.forEach(item => {
  ALL_KEY_OBJ[item] = item;
});

@Injectable({
  providedIn: 'root'
})
export class LangService {
  lang = sessionStorage.getItem('lang') || 'en';
  langKey = ALL_KEY_OBJ;
  setLang(newLang) {
    this.lang = newLang;
  }
}
