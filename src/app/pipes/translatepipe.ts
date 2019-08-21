import { Pipe, PipeTransform} from '@angular/core';
import {LangService} from '../service/lang.service';
const langData = require('../../assets/multi-lang.json');

@Pipe({name: 'translate'})
export class TranslatePipe extends LangService implements PipeTransform {
  transform(value: string, lang: string): string {
    if (!value) {return null; }
    if (langData[value]) {
      return langData[value][lang];
    }
  }
}
