import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  ru: {
    y: (c: any) => { return ['лет', 'год', 'года'][this.getSlavicForm(c)]; },
    mo: (c: any) => { return ['месяцев', 'месяц', 'месяца'][this.getSlavicForm(c)]; },
    w: (c: any) => { return ['недель', 'неделя', 'недели'][this.getSlavicForm(c)]; },
    d: (c: any) => { return ['дней', 'день', 'дня'][this.getSlavicForm(c)]; },
    h: (c: any) => { return ['часов', 'час', 'часа'][this.getSlavicForm(c)]; },
    m: (c: any) => { return ['минут', 'минута', 'минуты'][this.getSlavicForm(c)]; },
    s: (c: any) => { return ['секунд', 'секунда', 'секунды'][this.getSlavicForm(c)]; },
    ms: (c: any) => { return ['миллисекунд', 'миллисекунда', 'миллисекунды'][this.getSlavicForm(c)]; },
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

LANGUAGES.addLanguage('ru', languages['ru']);
