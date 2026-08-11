# Holo Card Site

A digital companion page for your physical holographic cards. One QR code
per artist, all pointing at the same site — the URL just carries which
card to show.

No build step, no framework. Plain HTML/CSS/JS, so it works dropped
straight into GitHub Pages.

## How it works

- `index.html` reads `?id=` from the URL and looks up that key in
  `data/artists.js`.
- `data/artists.js` is a plain JS object — one entry per card. Add a new
  artist by copying an existing entry, not by touching any other file.
- The card face reacts to your cursor (desktop) or phone tilt / finger
  drag (mobile) — rotation + a rainbow diffraction layer + a sparkle
  texture, all done in CSS/SVG, no image assets to source.
- The "Field notes" panel types itself out once, like a printed dossier
  page. Off by default for anyone with reduced-motion turned on — it
  just appears instantly instead.

## Adding a new card

1. Drop the artist's photo in `assets/`, portrait orientation, roughly a
   3:4 ratio works best (matches how the physical card crops).
2. Open `data/artists.js` and copy the `"example-artist"` block. Rename
   the key to a URL-safe slug, e.g. `"steve-aoki"`.
3. Fill in `name`, `event`, `date`, `gear`, `image`, and `story`
   (2-3 short paragraphs reads best — it's typed out character by
   character, so don't make it an essay).
4. Point that card's QR code at:
   `https://yoursite.github.io/reponame/?id=steve-aoki`

That's it — no rebuild, no redeploy needed for future cards once the
site is live, since `artists.js` is just data.

## Fonts

- **Big Shoulders Display** — the cold-stamp foil name. Condensed,
  industrial, reads like an all-access laminate.
- **Space Mono** — everything else. Typewriter/dossier feel.

Both load from Google Fonts in `index.html`. To swap in your own
"badass" pick, replace the `<link>` tag's `family=` params and the
`--font-display` / `--font-mono` variables at the top of `styles.css`.

## Deploying to GitHub Pages

1. Push this folder to a repo (or a `docs/` folder / `gh-pages` branch
   of an existing one).
2. Repo → Settings → Pages → set the source to that branch/folder.
3. GitHub gives you a URL like `https://yourusername.github.io/reponame/`.
   That's your base — append `?id=<slug>` per card for the QR codes.
4. Custom domain: add it under Settings → Pages → Custom domain, same
   as any GitHub Pages site.

## Local preview

No server needed — but some browsers restrict local file access enough
to be finicky with fonts. If anything looks off opening `index.html`
directly, run a quick local server from this folder instead:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000/?id=jensen-truly`

## Notes

- The holo/sparkle effect is generated entirely in CSS + an SVG noise
  filter — no texture files to license or track down.
- `assets/placeholder.jpg` is just a stand-in so new entries render
  something before you've dropped in the real photo.
