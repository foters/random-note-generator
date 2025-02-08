import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          headerMessage: 'Flag the options you need and click on the button below to start with',
          alterations: 'Show alterations',
          scaleType: 'Scale Type',
          scaleResult: 'Scale {{scaleName}}',
          changeCountry: '{{country}}',
          getNote: 'Get the note',
          diesis: 'Diesis',
          bemolle: 'Bemolle',
          tooltipAlterations: 'Hide or show the generated scale alterations',
          maggiore: 'Major',
          minoreNaturale: 'Natural minor',
          minoreArmonica: 'Armonic minor',
          minoreMelodica: 'Melodic minor',
        }
      },
      it: {
        translation: {
          headerMessage: 'Scegli le opzioni che preferisci e clicca sul bottone per iniziare',
          alterations: 'Mostra alterazioni',
          scaleType: 'Tipo di scala',
          scaleResult: 'Scala {{scaleName}}',
          changeCountry: '{{country}}',
          getNote: 'Genera la nota',
          diesis: 'Diesis',
          bemolle: 'Bemolle',
          tooltipAlterations: 'Mostra o nascondi le alterazioni della scala generata',
          maggiore: 'Maggiore',
          minoreNaturale: 'Minore naturale',
          minoreArmonica: 'Minore armonica',
          minoreMelodica: 'Minore melodica',
        }
      }
    }
  });

export default i18n;