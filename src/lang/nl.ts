import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  nl: {
    y: 'jaar',
    mo: (c: any) => { return c === 1 ? 'maand' : 'maanden'; },
    w: (c: any) => { return c === 1 ? 'week' : 'weken'; },
    d: (c: any) => { return c === 1 ? 'dag' : 'dagen'; },
    h: 'uur',
    m: (c: any) => { return c === 1 ? 'minuut' : 'minuten'; },
    s: (c: any) => { return c === 1 ? 'seconde' : 'seconden'; },
    ms: (c: any) => { return c === 1 ? 'milliseconde' : 'milliseconden'; },
    decimal: ','
  }
};

LANGUAGES.addLanguage('nl', languages['nl']);
