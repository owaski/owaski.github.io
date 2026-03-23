# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website for Siqi Ouyang (PhD student at CMU LTI), built with Jekyll using the [al-folio](https://github.com/alshedivat/al-folio) theme. Deployed to GitHub Pages at https://owaski.github.io.

## Build & Development Commands

```bash
# Local development with Docker (recommended)
docker compose up

# Local development without Docker
bundle install
bundle exec jekyll serve

# Production build
JEKYLL_ENV=production bundle exec jekyll build

# Format files with Prettier
npx prettier --write .
```

The Docker setup serves the site on port 8080 with live reload on port 35729.

## Architecture

This is a Jekyll site with the al-folio academic theme. Key content areas:

- **`_pages/about.md`** — Homepage content and profile configuration (serves as `/`)
- **`_bibliography/papers.bib`** — Publications in BibTeX format, rendered by `jekyll-scholar`. Papers with `selected={true}` appear on the homepage.
- **`_news/`** — News/announcement items shown on the homepage
- **`_awards/`** — Awards collection; items with `selected` appear on homepage
- **`_data/`** — Structured data: `cv.yml`, `coauthors.yml`, `venues.yml`, `socials.yml`, `repositories.yml`
- **`_config.yml`** — Site configuration including scholar settings, feature toggles, and third-party library versions

### Jekyll Scholar Configuration

Publications use the `apa` style. The `scholar` section in `_config.yml` controls author highlighting, bibliography source, and filtered BibTeX keywords (like `abbr`, `code`, `pdf`, `selected`, etc.). The bibliography template is `_layouts/bib.liquid`.

### Excluded from Build

Several template pages/features from al-folio are excluded in `_config.yml`: blog posts (`_posts/`), projects (`_projects/`), teaching, profiles, repositories, and dropdown pages. If re-enabling these, remove them from the `exclude` list in `_config.yml`.

### Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds with Ruby 3.3.5 and Python 3.13, runs PurgeCSS on the output, and deploys to GitHub Pages. Triggered on pushes to main/master.
