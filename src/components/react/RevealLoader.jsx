import { useEffect } from 'react';
import initReveals from '../../utils/reveal';

export default function RevealLoader() {
  useEffect(() => {
    initReveals();
  }, []);
  return null;
}
