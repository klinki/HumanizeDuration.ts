import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  ms: {
    y: 'tahun',
    mo: 'bulan',
    w: 'minggu',
    d: 'hari',
    h: 'jam',
    m: 'minit',
    s: 'saat',
    ms: 'milisaat',
    decimal: '.'
  }
};

LANGUAGES.addLanguage('ms', languages['ms']);
