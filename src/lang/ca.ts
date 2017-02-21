import {ILanguageItem} from "../humanize-duration.interface";

export let languages: ILanguageItem = {
  ca: {
    y: (c: any) => { return 'any' + (c !== 1 ? 's' : ''); },
    mo: (c: any) => { return 'mes' + (c !== 1 ? 'os' : ''); },
    w: (c: any) => { return 'setman' + (c !== 1 ? 'es' : 'a'); },
    d: (c: any) => { return 'di' + (c !== 1 ? 'es' : 'a'); },
    h: (c: any) => { return 'hor' + (c !== 1 ? 'es' : 'a'); },
    m: (c: any) => { return 'minut' + (c !== 1 ? 's' : ''); },
    s: (c: any) => { return 'segon' + (c !== 1 ? 's' : ''); },
    ms: (c: any) => { return 'milisegon' + (c !== 1 ? 's' : ''); },
    decimal: ','
  },
};
