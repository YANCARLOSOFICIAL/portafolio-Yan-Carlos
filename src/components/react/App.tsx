import { LanguageProvider } from '../../i18n/LanguageContext';
import Navbar from './Navbar';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}
