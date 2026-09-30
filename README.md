# Arush Gupta — Personal Portfolio Website

Production-ready personal portfolio website for **Arush Gupta**, Linux-native builder who self-hosts everything.

Built with Next.js (App Router, TypeScript), Tailwind CSS, Framer Motion, and Lenis smooth scrolling. Inspired by editorial creative portfolios with an electric lime dark aesthetic, oversized hero typography, film-grain texture, and Linux terminal elements.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
# Run typecheck and production build
npm run build

# Run linter
npm run lint
```

## Deployment to Vercel (Zero Config)

### Option 1: Git Push (Recommended)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete production portfolio"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Deploy with standard defaults (zero environment variables or custom configuration required).

### Option 2: Vercel CLI
Run the following command in the project directory:
```bash
npx vercel --prod
```
