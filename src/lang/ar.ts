import {ILanguageItem} from '../humanize-duration.interface';
import {LANGUAGES} from '../humanize-duration.lang';

export let languages: ILanguageItem = {
  ar: {
    y: (c: any) => { return c === 1 ? 'سنة' : 'سنوات'; },
    mo: (c: any) => { return c === 1 ? 'شهر' : 'أشهر'; },
    w: (c: any) => { return c === 1 ? 'أسبوع' : 'أسابيع'; },
    d: (c: any) => { return c === 1 ? 'يوم' : 'أيام'; },
    h: (c: any) => { return c === 1 ? 'ساعة' : 'ساعات'; },
    m: (c: any) => { return c === 1 ? 'دقيقة' : 'دقائق'; },
    s: (c: any) => { return c === 1 ? 'ثانية' : 'ثواني'; },
    ms: (c: any) => { return c === 1 ? 'جزء من الثانية' : 'أجزاء من الثانية'; },
    decimal: ','
  }
};

LANGUAGES.addLanguage('ar', languages.ar);
