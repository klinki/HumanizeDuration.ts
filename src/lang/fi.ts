import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  fi: {
    y: (c: any) => { return c === 1 ? 'vuosi' : 'vuotta'; },
    mo: (c: any) => { return c === 1 ? 'kuukausi' : 'kuukautta'; },
    w: (c: any) => { return 'viikko' + (c !== 1 ? 'a' : ''); },
    d: (c: any) => { return 'päivä' + (c !== 1 ? 'ä' : ''); },
    h: (c: any) => { return 'tunti' + (c !== 1 ? 'a' : ''); },
    m: (c: any) => { return 'minuutti' + (c !== 1 ? 'a' : ''); },
    s: (c: any) => { return 'sekunti' + (c !== 1 ? 'a' : ''); },
    ms: (c: any) => { return 'millisekunti' + (c !== 1 ? 'a' : ''); },
    decimal: ','
  }
};

LANGUAGES.addLanguage('fi', languages['fi']);
