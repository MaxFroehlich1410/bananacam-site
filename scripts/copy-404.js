import { copyFileSync } from 'fs';
import { resolve } from 'path';

const docsPath = resolve(import.meta.dirname, '..', 'docs');
const indexPath = resolve(docsPath, 'index.html');
const notFoundPath = resolve(docsPath, '404.html');

try {
  copyFileSync(indexPath, notFoundPath);
  console.log('✓ Copied index.html to 404.html for GitHub Pages SPA routing');
} catch (error) {
  console.error('✗ Failed to copy index.html to 404.html:', error.message);
  process.exit(1);
}

