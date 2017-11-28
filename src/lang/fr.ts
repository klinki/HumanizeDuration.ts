import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  fr: {
    y: (c: any) => { return 'an' + (c !== 1 ? 's' : ''); },
    mo: 'mois',
    w: (c: any) => { return 'semaine' + (c !== 1 ? 's' : ''); },
    d: (c: any) => { return 'jour' + (c !== 1 ? 's' : ''); },
    h: (c: any) => { return 'heure' + (c !== 1 ? 's' : ''); },
    m: (c: any) => { return 'minute' + (c !== 1 ? 's' : ''); },
    s: (c: any) => { return 'seconde' + (c !== 1 ? 's' : ''); },
    ms: (c: any) => { return 'milliseconde' + (c !== 1 ? 's' : ''); },
    decimal: ','
  }
};

LANGUAGES.addLanguage('fr', languages['fr']);
