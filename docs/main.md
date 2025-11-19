# ewernn.github.io

Personal portfolio website built with Jekyll and hosted on GitHub Pages.

## Repository Structure

```
ewernn.github.io/
├── _includes/          # Reusable HTML components
├── _layouts/           # Page templates
├── _posts/             # Blog posts (notes subdirectory)
├── _projects/          # Academic and personal project pages
├── _site/              # Generated static site (build output)
├── assets/             # Static resources
│   ├── css/            # Custom stylesheets
│   ├── images/         # Images and profile picture
│   └── js/             # JavaScript for theme toggle
└── for_eric/           # Temporary/personal files
```

## Quick Start

1. Install dependencies
   ```bash
   bundle install
   ```

2. Run local development server
   ```bash
   bundle exec jekyll serve
   ```
   Site will be available at `http://localhost:4000`

3. Build for production
   ```bash
   bundle exec jekyll build
   ```

## Core Components

### Jekyll Configuration
**Purpose**: Defines site metadata, plugins, and build settings
**Entry point**: `_config.yml`
**Key settings**:
- Site title and author information
- Google Analytics tracking
- MathJax support via Kramdown
- Collections for projects

### Layout System
**Purpose**: HTML templates for consistent page structure
**Entry point**: `_layouts/default.html`
**Key files**:
- `_layouts/default.html` - Main page template with header/footer
- `_includes/abcheader.html` - Navigation header
- `_includes/abcfooter.html` - Site footer
- `_includes/google_analytics.html` - Analytics tracking code

### Content Pages
**Purpose**: Markdown files that become website pages
**Key files**:
- `index.md` - Homepage with recent work and links
- `about.md` - About page
- `projects.md` - Projects listing page
- `404.html` - Custom error page

### Projects Collection
**Purpose**: Individual project write-ups and case studies
**Entry point**: `_projects/` directory
**Key files**:
- `whyai.md` - iOS conversational AI system
- `cs229_proj.md` - CNN GeoGuessr classification
- `cs237a_proj.md` - Autonomous wheeled robot SLAM
- `cs224r_proj.md` - RL for robotic arm
- `cs224u_proj.md` - LLM prompt-tuning
- `cs168_proj.md` - Vector similarity search

### Styling
**Purpose**: Custom CSS for site appearance and theme support
**Entry point**: `assets/css/custom.scss`
**Features**: Custom color scheme and responsive design

### Theme Toggle
**Purpose**: Dark/light mode switcher
**Entry point**: `assets/js/theme-toggle.js`
**Features**: JavaScript-based theme switching

## Architecture

This is a standard Jekyll static site. Jekyll reads markdown files (`*.md`) and processes them through layouts (`_layouts/`) to generate static HTML. The `_config.yml` file defines a projects collection that allows individual project pages in `_projects/` to be rendered with permalinks. Reusable components in `_includes/` are inserted into layouts. The build process compiles everything into `_site/` for deployment to GitHub Pages.

## Navigation Guide

To work on:
- Site configuration → `_config.yml`
- Page templates → `_layouts/`
- Reusable components → `_includes/`
- Homepage content → `index.md`
- Add new projects → `_projects/`
- Styling → `assets/css/custom.scss`
- JavaScript features → `assets/js/`
- Images and assets → `assets/images/`

## Current Status

**Working**:
- Local development server
- GitHub Pages deployment
- Project pages with markdown rendering
- Google Analytics tracking
- MathJax equation rendering
- Dark/light theme toggle

**Not Working**:
- No known issues

## Dependencies

Built with:
- Jekyll (via github-pages gem)
- Webrick 1.7 (local server)
- Kramdown (markdown processor with MathJax)
- jekyll-feed plugin

---

## Documentation Update Guidelines

**Core Principles:**
- **Delete first, add second** - Always remove outdated content before adding new
- **Present tense only** - Document what IS, not what WAS
- **Zero history** - No changelogs, migration notes, or "previously" references
- **YAGNI for docs** - Delete unused files and sections immediately; they create confusion

**When to Delete:**
- Old implementations, fixed bugs, previous versions
- Historical context and migration notes
- Unused files or features
- Anything you can't verify still works

**File Management:**
- Delete entire unused documentation files
- Remove orphaned sections that no longer apply
- Clean up broken internal links to deleted content

> See `doc-update-guidelines.md` for complete update instructions including state management debugging, deployment checklists, and detailed update rules.
