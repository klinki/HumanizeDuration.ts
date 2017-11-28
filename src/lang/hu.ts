import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  hu: {
    y: 'év',
    mo: 'hónap',
    w: 'hét',
    d: 'nap',
    h: 'óra',
    m: 'perc',
    s: 'másodperc',
    ms: 'ezredmásodperc',
    decimal: ','
  }
};

LANGUAGES.addLanguage('hu', languages.hu);
