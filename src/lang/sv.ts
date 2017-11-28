import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  sv: {
    y: 'år',
    mo: (c: any) => { return 'månad' + (c !== 1 ? 'er' : ''); },
    w: (c: any) => { return 'veck' + (c !== 1 ? 'or' : 'a'); },
    d: (c: any) => { return 'dag' + (c !== 1 ? 'ar' : ''); },
    h: (c: any) => { return 'timm' + (c !== 1 ? 'ar' : 'e'); },
    m: (c: any) => { return 'minut' + (c !== 1 ? 'er' : ''); },
    s: (c: any) => { return 'sekund' + (c !== 1 ? 'er' : ''); },
    ms: (c: any) => { return 'millisekund' + (c !== 1 ? 'er' : ''); },
    decimal: ','
  }
};

LANGUAGES.addLanguage('sv', languages.sv);
