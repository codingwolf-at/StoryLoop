# StoryLoop

A lightweight, mobile-style **story viewer** inspired by social apps: a horizontal row of profile thumbnails opens a full-screen story player with profile header, reply/footer chrome, and left/right tap zones to move between stories.

## Features

- **Story strip** — Avatar thumbnails built from `constants.js`; tap one to open the viewer at that story.
- **Story player** — Full-screen image, username, relative time, and footer actions (icons via Font Awesome).
- **Navigation** — Tap the **left** or **right** edge zones to go to the previous or next story.
- **Auto-advance** — While the viewer is open, stories advance every **5 seconds**; the timer resets when you navigate manually.
- **End of list** — After the last story, the viewer closes (see `nextStory` in `script.js`).

## Tech stack

- Plain **HTML**, **CSS**, and **JavaScript** (ES modules)
- [Font Awesome](https://fontawesome.com/) (loaded from Kit in `index.html`)
- Story images in `./assets/`; avatar URLs in `constants.js` can point to any image URL

## Run locally

This project uses **ES modules** (`import` / `export`). Open the app over **HTTP**, not as a `file://` URL, or the browser may block module loading.

From the project root:

```bash
npx serve .
```

Then open the URL shown in the terminal (for example `http://localhost:3000`).

Alternatives: `python3 -m http.server`, VS Code “Live Server”, or any static file server.

## Project layout

| Path | Role |
|------|------|
| `index.html` | Markup: story list, player shell, nav zones |
| `style.css` | Layout and visuals |
| `script.js` | Module: list, open/close player, `showStory`, timer, prev/next |
| `constants.js` | Exported `stories` array (metadata + image paths) |
| `assets/` | Local story images (`story1.jpg` … `story10.jpg`) |

## Customizing stories

Edit **`constants.js`**. Each story object supports:

- `id`, `username`, `timeAgo` — Shown in the player header
- `profilePic` — URL for the thumbnail and header avatar (remote URLs work)
- `storyImage` — Path to the full story image, e.g. `./assets/story3.jpg`

Keep filenames in `assets/` aligned with `storyImage`, or update paths in `constants.js` to match your files.

## Browser support

Use a current browser with **ES module** support. No build step is required.
