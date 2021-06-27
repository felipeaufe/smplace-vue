import { createI18n } from 'vue-i18n'
import enUS from './en-US.json';

export const i18n = createI18n({

  // TODO: Get local from local storage;
  locale: 'en-US',
  
  messages: {
    ...enUS,
  }
});