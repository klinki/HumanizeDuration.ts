import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  en: {
    y: (c: any) => { return 'year' + (c !== 1 ? 's' : ''); },
    mo: (c: any) => { return 'month' + (c !== 1 ? 's' : ''); },
    w: (c: any) => { return 'week' + (c !== 1 ? 's' : ''); },
    d: (c: any) => { return 'day' + (c !== 1 ? 's' : ''); },
    h: (c: any) => { return 'hour' + (c !== 1 ? 's' : ''); },
    m: (c: any) => { return 'minute' + (c !== 1 ? 's' : ''); },
    s: (c: any) => { return 'second' + (c !== 1 ? 's' : ''); },
    ms: (c: any) => { return 'millisecond' + (c !== 1 ? 's' : ''); },
    decimal: '.'
  }
};

LANGUAGES.addLanguage('en', languages['en']);
