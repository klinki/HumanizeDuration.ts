import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  ja: {
    y: '年',
    mo: '月',
    w: '週',
    d: '日',
    h: '時間',
    m: '分',
    s: '秒',
    ms: 'ミリ秒',
    decimal: '.'
  }
};

LANGUAGES.addLanguage('ja', languages['ja']);
