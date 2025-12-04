import { LanguageConfig as ILanguageConfig } from "../core/interfaces/iLanguageConfig";

export const environment = {
  production: true, 
  passwordMinLenght: 8,
  apiUrl: 'https://31.97.83.12.sslip.io/api',

  languages: [
    { code: 'en', name: 'English', countryCode: 'gb' },
    { code: 'pt-BR', name: 'Português (BR)', countryCode: 'br' },
    { code: 'pt-PT', name: 'Português (PT)', countryCode: 'pt' },
  ] as ILanguageConfig[],

  get availableLanguageMap(): { [key: string]: string } {
    return this.languages.reduce((acc, lang) => {
      acc[lang.code] = lang.name;
      return acc;
    }, {} as { [key: string]: string });
  },

  get availableLanguages(): string[] {
    return this.languages.map(lang => lang.code);
  }
};

// ADICIONE esta linha para re-exportar como LanguageConfig
export type LanguageConfig = ILanguageConfig;