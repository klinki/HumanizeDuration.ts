import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  de: {
    y: (c: any) => { return 'Jahr' + (c !== 1 ? 'e' : ''); },
    mo: (c: any) => { return 'Monat' + (c !== 1 ? 'e' : ''); },
    w: (c: any) => { return 'Woche' + (c !== 1 ? 'n' : ''); },
    d: (c: any) => { return 'Tag' + (c !== 1 ? 'e' : ''); },
    h: (c: any) => { return 'Stunde' + (c !== 1 ? 'n' : ''); },
    m: (c: any) => { return 'Minute' + (c !== 1 ? 'n' : ''); },
    s: (c: any) => { return 'Sekunde' + (c !== 1 ? 'n' : ''); },
    ms: (c: any) => { return 'Millisekunde' + (c !== 1 ? 'n' : ''); },
    decimal: ','
  },
};

LANGUAGES.addLanguage('de', languages.de);
