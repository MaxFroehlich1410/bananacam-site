import { copyFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const rootPath = resolve(import.meta.dirname, '..');
const docsPath = resolve(rootPath, 'docs');
const indexPath = resolve(docsPath, 'index.html');
const notFoundPath = resolve(docsPath, '404.html');
const nojekyllPath = resolve(docsPath, '.nojekyll');
const cnameSourcePath = resolve(rootPath, 'CNAME');
const cnameDestPath = resolve(docsPath, 'CNAME');

try {
  // Ensure docs directory exists
  if (!existsSync(docsPath)) {
    console.error('✗ docs directory does not exist. Build may have failed.');
    process.exit(1);
  }

  // Copy index.html to 404.html for SPA routing
  if (existsSync(indexPath)) {
    copyFileSync(indexPath, notFoundPath);
    console.log('✓ Copied index.html to 404.html for GitHub Pages SPA routing');
  } else {
    console.error('✗ index.html not found in docs directory');
    process.exit(1);
  }

  // Copy CNAME file to docs folder for custom domain support
  if (existsSync(cnameSourcePath)) {
    copyFileSync(cnameSourcePath, cnameDestPath);
    console.log('✓ Copied CNAME file to docs folder for custom domain');
  } else {
    console.warn('⚠️  CNAME file not found in root - custom domain may not work');
  }

  // Create .nojekyll to disable Jekyll processing
  writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll to disable Jekyll processing');
} catch (error) {
  console.error('✗ Failed to set up GitHub Pages files:', error.message);
  process.exit(1);
}

