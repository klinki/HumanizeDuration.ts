import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  no: {
    y: 'år',
    mo: (c: any) => { return 'måned' + (c !== 1 ? 'er' : ''); },
    w: (c: any) => { return 'uke' + (c !== 1 ? 'r' : ''); },
    d: (c: any) => { return 'dag' + (c !== 1 ? 'er' : ''); },
    h: (c: any) => { return 'time' + (c !== 1 ? 'r' : ''); },
    m: (c: any) => { return 'minutt' + (c !== 1 ? 'er' : ''); },
    s: (c: any) => { return 'sekund' + (c !== 1 ? 'er' : ''); },
    ms: (c: any) => { return 'millisekund' + (c !== 1 ? 'er' : ''); },
    decimal: ','
  }
};

LANGUAGES.addLanguage('no', languages.no);
