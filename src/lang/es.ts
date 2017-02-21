import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  es: {
    y: (c: any) => { return 'año' + (c !== 1 ? 's' : ''); },
    mo: (c: any) => { return 'mes' + (c !== 1 ? 'es' : ''); },
    w: (c: any) => { return 'semana' + (c !== 1 ? 's' : ''); },
    d: (c: any) => { return 'día' + (c !== 1 ? 's' : ''); },
    h: (c: any) => { return 'hora' + (c !== 1 ? 's' : ''); },
    m: (c: any) => { return 'minuto' + (c !== 1 ? 's' : ''); },
    s: (c: any) => { return 'segundo' + (c !== 1 ? 's' : ''); },
    ms: (c: any) => { return 'milisegundo' + (c !== 1 ? 's' : ''); },
    decimal: ','
  }
};

LANGUAGES.addLanguage('es', languages['es']);
