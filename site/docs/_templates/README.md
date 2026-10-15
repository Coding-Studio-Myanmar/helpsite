# Authoring guide (not published)

## Add a new product

1. Copy `docs/product-a` to `docs/<new-product>` (use lowercase and hyphens).
2. Edit `index.md` and update titles in each section.
3. Add a card for it in `src/pages/index.tsx` (the `products` list).

## Article front-matter template

```md
---
title: Article title
description: One sentence used in search results and link previews.
tags: [how-to]
last_update:
  date: YYYY-MM-DD
  author: Your Name
---
```

## Article types

- **How-to**: task-focused, numbered steps, short.
- **Technical**: reference, configuration, architecture, APIs.
- **Training**: learning objectives, lessons, review questions.
- **FAQ**: question as heading, short answer.
