import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  id: {
    y: 'tahun',
    mo: 'bulan',
    w: 'minggu',
    d: 'hari',
    h: 'jam',
    m: 'menit',
    s: 'detik',
    ms: 'milidetik',
    decimal: '.'
  }
};

LANGUAGES.addLanguage('id', languages['id']);
