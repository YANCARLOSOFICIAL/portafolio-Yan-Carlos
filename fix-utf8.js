
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function convertToUtf8(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      convertToUtf8(fullPath);
    } else if (/\.(js|jsx|ts|tsx|astro|css|html)$/.test(file)) {
      const content = fs.readFileSync(fullPath);
      fs.writeFileSync(fullPath, content, { encoding: 'utf8' });
    }
  });
}

convertToUtf8(__dirname);
console.log('Todos los archivos convertidos a UTF-8');
