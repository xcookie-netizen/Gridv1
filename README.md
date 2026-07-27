# Grid

**Train. Study. Perform.**

Grid is a local-first, mobile-first Progressive Web App for university planning, functional fitness programming, daily focus, offline coaching and performance tracking.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL in a browser.

## Production build

```bash
npm run lint
npm run build
npm run preview
```

## Install on iPhone

1. Deploy Grid over HTTPS.
2. Open the deployed site in Safari.
3. Tap **Share**.
4. Tap **Add to Home Screen**.
5. Launch Grid from the new Home Screen icon.

Grid includes Apple launch images for current 390 px, 428 px and 430 px iPhone display families, a dedicated 180 px touch icon, regular PWA icons and a maskable Android icon.

## Deployment

### Vercel

Import the repository into Vercel. The included `vercel.json` configures the Vite build and SPA fallback.

### Netlify

Create a new site from the repository. The included `netlify.toml` sets the build, publish directory and SPA fallback.

### GitHub Pages

Set the Vite `base` option to the repository path when deploying to a project page, then build and publish the `dist` directory with a GitHub Actions workflow. For a custom domain or user site, `/` can remain the base.

## Data and privacy

All user data is stored locally in IndexedDB through Dexie. Grid provides JSON export/import for portable backups. Version 1 does not transmit personal data to a server. The offline coach service consumes only in-memory schedule context and does not make network requests.

## Premium Product Experience — version 1.2.0

- Branded Grid app icon, maskable icon, launch screen and in-app animated splash
- Three-stage premium onboarding with signal-colour selection and replay support
- Data-driven Home command dashboard with day load, weekly capacity, academic hours, training blocks and deadline signals
- Editable, autosaving daily focus card stored in IndexedDB
- Rich schedule density summary and redesigned live/completed event cards
- Full event detail workflow with edit, complete, reopen, duplicate and delete actions
- WOD Lab templates, movement library, format picker, build completion and premium live session preview
- Dedicated offline coach service with Plan, Train, Study and Recover modes
- Persistent local coach thread, schedule-aware context and copyable structured responses
- Actual six-week load chart, streak calculations, activity matrix, category distribution, recent WODs and deadlines
- Expanded Control settings for appearance, accent, haptics, reduced motion, time format, data health and onboarding replay
- Custom Grid glyph, refined typography scale, stronger colour hierarchy and haptic-friendly interaction states
- Improved focus states, semantic dialog roles, skip navigation, reduced-motion override and 44 px minimum targets

## Existing functionality retained

- React, Vite and TypeScript architecture
- Dexie and IndexedDB local persistence
- Installable PWA with automatic service worker updates and offline caching
- Weekly recurring university class preload
- Day, week and month schedule views
- Schedule search, category filtering, swipe navigation and pull-to-refresh
- Natural-language Quick Add with confirmation
- WOD saving that creates a schedule event
- Dark, light and system appearance modes
- JSON export/import, class restoration and local reset
- Responsive layouts for 320 px, 375 px, 390 px and 430 px mobile widths
