import I18n from 'i18n-js';
import en from './locales/en.json';
import * as Localization from 'expo-localization';

I18n.fallbacks = true;
I18n.translations = { en };
I18n.locale = Localization.locale;

export default I18n;