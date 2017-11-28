import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  uk: {
    y: (c: any) => { return ['років', 'рік', 'роки'][getSlavicForm(c)]; },
    mo: (c: any) => { return ['місяців', 'місяць', 'місяці'][getSlavicForm(c)]; },
    w: (c: any) => { return ['неділь', 'неділя', 'неділі'][getSlavicForm(c)]; },
    d: (c: any) => { return ['днів', 'день', 'дні'][getSlavicForm(c)]; },
    h: (c: any) => { return ['годин', 'година', 'години'][getSlavicForm(c)]; },
    m: (c: any) => { return ['хвилин', 'хвилина', 'хвилини'][getSlavicForm(c)]; },
    s: (c: any) => { return ['секунд', 'секунда', 'секунди'][getSlavicForm(c)]; },
    ms: (c: any) => { return ['мілісекунд', 'мілісекунда', 'мілісекунди'][getSlavicForm(c)]; },
    decimal: ','
  }
};

// Internal helper function for Russian and Ukranian languages.
function getSlavicForm(c: any) {
  if (Math.floor(c) !== c) {
      return 2;
  } else if ((c >= 5 && c <= 20) || (c % 10 >= 5 && c % 10 <= 9) || c % 10 === 0) {
      return 0;
  } else if (c % 10 === 1) {
      return 1;
  } else if (c > 1) {
      return 2;
  } else {
      return 0;
  }
}

LANGUAGES.addLanguage('uk', languages['uk']);
