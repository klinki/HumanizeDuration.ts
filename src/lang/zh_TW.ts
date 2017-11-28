import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  zh_TW: {
    y: '年',
    mo: '個月',
    w: '周',
    d: '天',
    h: '小時',
    m: '分鐘',
    s: '秒',
    ms: '毫秒',
    decimal: '.'
  }
};

LANGUAGES.addLanguage('zh_TW', languages['zh_TW']);
