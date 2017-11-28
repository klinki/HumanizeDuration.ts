import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  pt: {
    y: (c: any) => { return 'ano' + (c !== 1 ? 's' : ''); },
    mo: (c: any) => { return c !== 1 ? 'meses' : 'mês'; },
    w: (c: any) => { return 'semana' + (c !== 1 ? 's' : ''); },
    d: (c: any) => { return 'dia' + (c !== 1 ? 's' : ''); },
    h: (c: any) => { return 'hora' + (c !== 1 ? 's' : ''); },
    m: (c: any) => { return 'minuto' + (c !== 1 ? 's' : ''); },
    s: (c: any) => { return 'segundo' + (c !== 1 ? 's' : ''); },
    ms: (c: any) => { return 'milissegundo' + (c !== 1 ? 's' : ''); },
    decimal: ','
  }
};

LANGUAGES.addLanguage('pt', languages.pt);
