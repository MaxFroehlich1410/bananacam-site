# BananaCam Landing Page

The official landing page for BananaCam - AI-powered photo transformation app.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

The site is automatically deployed to GitHub Pages via GitHub Actions when you push to the `main` branch.

1. Ensure GitHub Pages is enabled in your repository settings:
   - Go to Settings → Pages
   - Source: **GitHub Actions**
   - Save

2. Push to `main` branch - the workflow will automatically:
   - Build the site
   - Deploy to GitHub Pages
   - Make it available at: `https://maxfroehlich1410.github.io/bananacam-site/`

### Manual Deployment

If you need to deploy manually:

```bash
# Build for GitHub Pages
npm run build:gh-pages

# Commit and push the docs folder
git add docs
git commit -m "Deploy to GitHub Pages"
git push
```

Then in your GitHub repository settings:
- Go to Settings → Pages
- Source: **Deploy from a branch**
- Branch: `main` / `docs`
- Folder: `/ (root)` → then select `docs` folder
- Save

## Project Structure

```
├── client/          # Frontend React application
├── server/          # Express backend server
├── shared/          # Shared types and schemas
├── attached_assets/  # Image assets
└── docs/            # GitHub Pages build output (auto-generated)
```

## Technologies

- **Frontend**: React, TypeScript, Vite, Wouter (routing)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Deployment**: GitHub Pages

## License

MIT

