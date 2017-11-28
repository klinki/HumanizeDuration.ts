import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  pl: {
    y: (c: any) => { return ['rok', 'roku', 'lata', 'lat'][getPolishForm(c)]; },
    mo: (c: any) => { return ['miesiąc', 'miesiąca', 'miesiące', 'miesięcy'][getPolishForm(c)]; },
    w: (c: any) => { return ['tydzień', 'tygodnia', 'tygodnie', 'tygodni'][getPolishForm(c)]; },
    d: (c: any) => { return ['dzień', 'dnia', 'dni', 'dni'][getPolishForm(c)]; },
    h: (c: any) => { return ['godzina', 'godziny', 'godziny', 'godzin'][getPolishForm(c)]; },
    m: (c: any) => { return ['minuta', 'minuty', 'minuty', 'minut'][getPolishForm(c)]; },
    s: (c: any) => { return ['sekunda', 'sekundy', 'sekundy', 'sekund'][getPolishForm(c)]; },
    ms: (c: any) => { return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][getPolishForm(c)]; },
    decimal: ','
  }
};

// Internal helper function for Polish language.
function getPolishForm(c: any) {
  if (c === 1) {
      return 0;
  } else if (Math.floor(c) !== c) {
      return 1;
  } else if (c % 10 >= 2 && c % 10 <= 4 && !(c % 100 > 10 && c % 100 < 20)) {
      return 2;
  } else {
      return 3;
  }
}

LANGUAGES.addLanguage('pl', languages['pl']);
