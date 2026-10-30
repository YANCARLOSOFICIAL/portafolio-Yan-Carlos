import { LanguageProvider } from '../../i18n/LanguageContext';
import Projects, { type Project } from './Projects';
import Contact from './Contact';

export default function ContentSections({ projects }: { projects: Project[] }) {
  return (
    <LanguageProvider>
      <Projects projects={projects} />
      <Contact />
    </LanguageProvider>
  );
}
