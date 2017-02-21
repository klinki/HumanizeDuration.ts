import {ILanguage, ILanguageItem} from './humanize-duration.interface';

export class HumanizeDurationLanguage {

    languages: ILanguageItem = {};

    addLanguage(key: string, lang: ILanguage) {
        this.languages[key] = lang;
    }
}

export const LANGUAGES = new HumanizeDurationLanguage();
