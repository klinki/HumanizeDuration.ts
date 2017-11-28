import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  ko: {
    y: '년',
    mo: '개월',
    w: '주일',
    d: '일',
    h: '시간',
    m: '분',
    s: '초',
    ms: '밀리 초',
    decimal: '.'
  }
};

LANGUAGES.addLanguage('ko', languages['ko']);
