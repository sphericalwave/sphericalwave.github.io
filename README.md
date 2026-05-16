# sphericalwave.com

Personal site of Aaron Anthony — engineer, mathematician, AJJ black belt, builder.
Built with [Jekyll](https://jekyllrb.com/) and served via GitHub Pages at
[sphericalwave.com](https://sphericalwave.com).

## Stack

- **Jekyll 3.9.3** via the `github-pages` gem (matches GitHub Pages build).
- **Bundler** for dependency management.
- **WebRick** as the local server (already in the `Gemfile`).

## Prerequisites

- **Ruby ≥ 2.7** — the `github-pages` gem (228) requires it; macOS system Ruby
  2.6 will **not** work. Use a version manager. This repo pins **Ruby 3.1.4**
  via `.ruby-version` (used by [`rbenv`](https://github.com/rbenv/rbenv) /
  [`chruby`](https://github.com/postmodern/chruby)):

  ```sh
  brew install rbenv
  rbenv init                 # add the printed line to ~/.zshrc, reopen shell
  rbenv install 3.1.4        # compiles from source (~5–10 min)
  ```

- **Bundler**: `gem install bundler`

## Setup

From the repo root (with Ruby 3.1.4 active — `ruby -v` should show 3.1.4):

```sh
bundle install
```

> If `ffi` fails to build with a clang `-print-multi-os-directory` error on
> Apple Silicon, run `bundle update ffi` (an older pinned `ffi` doesn't compile
> on modern Xcode).

## Run locally

```sh
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

### Useful flags

| Flag | Effect |
|---|---|
| `--livereload` | Auto-reload the browser on file changes |
| `--drafts` | Render posts in `_drafts/` |
| `--incremental` | Faster rebuilds (rebuilds only changed files) |

Example:

```sh
bundle exec jekyll serve --livereload --drafts
```

## Project layout

| Path | Contents |
|---|---|
| `_posts/` | Published blog posts (essays: jiujitsu, biomechanics, philosophy, engineering) |
| `_drafts/` | Unpublished drafts (rendered only with `--drafts`) |
| `_projects/` | App / project entries (collection — not yet wired in `_config.yml`) |
| `_layouts/` | Page templates (`default`, `page`, `post`, `tag_page`) |
| `_includes/` | Reusable partials (navbar, footer, head, cards, etc.) |
| `_sass/` | SCSS partials, imported by `styles.scss` |
| `public/` | Static assets — images, icons, resume PDF |
| `_config.yml` | Jekyll configuration |
| `index.md` | Home page |

## Deploy

Pushing to the default branch (`master`) triggers the GitHub Pages build
automatically. The custom domain is set via the `CNAME` file.
