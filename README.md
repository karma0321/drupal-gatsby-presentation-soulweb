# Drupal + GatsbyJS
### by [SoulWeb Solutions](https://soulweb.it)

Slide deck (built with Gatsby) on how to use Drupal with GatsbyJS.

You can view the slides at https://gatsbydrupal.soulweb.it  

## Gatsby Starter Deck

Created with gatsby-starter-deck - https://github.com/fabe/gatsby-starter-deck

## Usage

Edit and extend your slides inside the `src/slides.md` file. Navigate with the arrow keys.

```bash
# To develop & write
$ yarn develop

# To build
$ yarn build
```

## Writing

By default, use [src/slides/](src/slides/).

Markdown files are loaded in sorted path order. Slides are generated by
splitting each markdown file along `<hr/>` elements (`---` in Markdown lingo).

Examples:

```md
# This is the first slide

---

## This is the second slide

![Monkey](//i.imgur.com/PnbINJ6.gif)
```
