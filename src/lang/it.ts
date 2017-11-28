import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  it: {
    y: (c: any) => { return 'ann' + (c !== 1 ? 'i' : 'o'); },
    mo: (c: any) => { return 'mes' + (c !== 1 ? 'i' : 'e'); },
    w: (c: any) => { return 'settiman' + (c !== 1 ? 'e' : 'a'); },
    d: (c: any) => { return 'giorn' + (c !== 1 ? 'i' : 'o'); },
    h: (c: any) => { return 'or' + (c !== 1 ? 'e' : 'a'); },
    m: (c: any) => { return 'minut' + (c !== 1 ? 'i' : 'o'); },
    s: (c: any) => { return 'second' + (c !== 1 ? 'i' : 'o'); },
    ms: (c: any) => { return 'millisecond' + (c !== 1 ? 'i' : 'o'); },
    decimal: ','
  }
};

LANGUAGES.addLanguage('it', languages.it);
