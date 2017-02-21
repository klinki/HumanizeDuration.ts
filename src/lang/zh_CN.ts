import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  zh_CN: {
    y: '年',
    mo: '个月',
    w: '周',
    d: '天',
    h: '小时',
    m: '分钟',
    s: '秒',
    ms: '毫秒',
    decimal: '.'
  }
};

LANGUAGES.addLanguage('zh_CN', languages['zh_CN']);
