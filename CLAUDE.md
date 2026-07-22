# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static HTML family checklists, deployed via GitHub Pages. No build step, no JS framework. Each checklist is a standalone `.html` file using a shared `styles.css`.

## Development

Serve locally: `python3 -m http.server 8000`

Deploy: push to `main` — GitHub Pages auto-deploys.

## Adding a new checklist

1. Create a new `.html` file following the exact structure of existing pages (head meta tags, `<div class="columns">`, sections, notes block).
2. Add a card link in `index.html` (inside `.grid`), with a matching `.card.<name>` border-color style.
3. If new section classes are needed, add color rules to `styles.css` following the existing one-liner pattern.

## Conventions

- Each section: `<div class="section {class}">` with a `.section-header` (emoji span + label span) and `.section-body` containing `<div class="item">` entries.
- Section class names in CSS use the pattern: `.classname .section-header { background: #hex; }  .classname { border-color: #hex; }` on a single line.
- Earthy, muted color palette for section headers.
- Pages are print-optimized (A4, 3-column layout in print media).
- No JavaScript in checklist pages — index.html has a service worker unregister script only.
