import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  tr: {
    y: 'yıl',
    mo: 'ay',
    w: 'hafta',
    d: 'gün',
    h: 'saat',
    m: 'dakika',
    s: 'saniye',
    ms: 'milisaniye',
    decimal: ','
  }
};

LANGUAGES.addLanguage('tr', languages.tr);
