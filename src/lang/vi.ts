import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  vi: {
    y: 'năm',
    mo: 'tháng',
    w: 'tuần',
    d: 'ngày',
    h: 'giờ',
    m: 'phút',
    s: 'giây',
    ms: 'mili giây',
    decimal: ','
  }
};

LANGUAGES.addLanguage('vi', languages['vi']);
