# Réna Hajjar — portfolio

Next.js 15 + React Three Fiber + Rapier physics. Static site: no server needed.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # outputs the static site to /out
```

## Where things live

| What | Where |
| --- | --- |
| **All the words** (bio, research, jobs, art titles, travel, Substack link) | `src/content/site.ts` |
| 3D desk: objects, positions, physics | `src/components/desk/DeskScene.tsx` |
| Desk object artwork (placeholder textures) | `src/components/desk/textures.ts` |
| Home page sections | `src/components/home/Sections.tsx` |
| Header | `src/components/SiteHeader.tsx` |
| Music / Art pages | `src/app/music/page.tsx`, `src/app/art/page.tsx` |
| Colours + fonts | `tailwind.config.ts` |
| Images | `public/` (run `node scripts/opt-images.mjs` to re-compress) |

### Common edits

- **Add a trip:** add `{ place, year, note }` to `travel` in `site.ts`.
- **Add a song:** add `{ title, note, link }` to `music.tracks`.
- **Substack goes live:** paste the URL into `writing.substack`.
- **New CV:** drop the PDF into `public/` and update `profile.cv`.
- **Swap in real photos / 3D models for desk objects:** replace the matching
  texture in `textures.ts` with `new THREE.TextureLoader().load("/desk/<name>.webp")`,
  or load a `.glb` model with drei's `useGLTF` inside that object's `render()`.

## Deploying (free) on Vercel

1. Sign in at vercel.com with GitHub → **Add New → Project** → pick `rena-hajjar/portfolio`.
2. Framework preset: **Next.js** (auto-detected). Click **Deploy**.
3. Every push to `main` redeploys; every other branch gets its own preview URL.
