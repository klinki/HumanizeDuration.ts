import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  lt: {
    y: (c: any) => { return ((c % 10 === 0) || (c % 100 >= 10 && c % 100 <= 20)) ? 'metų' : 'metai'; },
    mo: (c: any) => { return ['mėnuo', 'mėnesiai', 'mėnesių'][getLithuanianForm(c)]; },
    w: (c: any) => { return ['savaitė', 'savaitės', 'savaičių'][getLithuanianForm(c)]; },
    d: (c: any) => { return ['diena', 'dienos', 'dienų'][getLithuanianForm(c)]; },
    h: (c: any) => { return ['valanda', 'valandos', 'valandų'][getLithuanianForm(c)]; },
    m: (c: any) => { return ['minutė', 'minutės', 'minučių'][getLithuanianForm(c)]; },
    s: (c: any) => { return ['sekundė', 'sekundės', 'sekundžių'][getLithuanianForm(c)]; },
    ms: (c: any) => { return ['milisekundė', 'milisekundės', 'milisekundžių'][getLithuanianForm(c)]; },
    decimal: ','
  }
};

// Internal helper function for Lithuanian language.
function getLithuanianForm(c: any) {
  if (c === 1 || (c % 10 === 1 && c % 100 > 20)) {
      return 0;
  } else if (Math.floor(c) !== c || (c % 10 >= 2 && c % 100 > 20) || (c % 10 >= 2 && c % 100 < 10)) {
      return 1;
  } else {
      return 2;
  }
}

LANGUAGES.addLanguage('lt', languages.lt);
