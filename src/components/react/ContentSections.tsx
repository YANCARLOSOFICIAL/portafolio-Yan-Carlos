import { LanguageProvider } from '../../i18n/LanguageContext';
import Projects from './Projects';
import Contact from './Contact';

export default function ContentSections() {
  return (
    <LanguageProvider>
      <Projects />
      <Contact />
    </LanguageProvider>
  );
}
