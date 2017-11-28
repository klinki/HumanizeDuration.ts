import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  gr: {
    y: (c: any) => { return c === 1 ? 'χρόνος' : 'χρόνια'; },
    mo: (c: any) => { return c === 1 ? 'μήνας' : 'μήνες'; },
    w: (c: any) => { return c === 1 ? 'εβδομάδα' : 'εβδομάδες'; },
    d: (c: any) => { return c === 1 ? 'μέρα' : 'μέρες'; },
    h: (c: any) => { return c === 1 ? 'ώρα' : 'ώρες'; },
    m: (c: any) => { return c === 1 ? 'λεπτό' : 'λεπτά'; },
    s: (c: any) => { return c === 1 ? 'δευτερόλεπτο' : 'δευτερόλεπτα'; },
    ms: (c: any) => { return c === 1 ? 'χιλιοστό του δευτερολέπτου' : 'χιλιοστά του δευτερολέπτου'; },
    decimal: ','
  }
};

LANGUAGES.addLanguage('gr', languages.gr);
