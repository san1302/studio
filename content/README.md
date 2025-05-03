# Content Management

This folder contains content for your website. Follow these instructions to add or modify content.

## Adding New Articles

1. Create a new markdown file in the `articles` folder. The filename will become the URL slug.
   - Example: `my-new-article.md` will be accessible at `/articles/my-new-article`

2. Add frontmatter at the top of your markdown file with the following format:

```md
---
title: Your Article Title
date: YYYY-MM-DD
excerpt: A brief summary of your article (will appear in the article list)
tags: 
  - Tag1
  - Tag2
  - Tag3
---
```

3. Write your article content below the frontmatter using Markdown syntax.
   - Use `##` for h2 headings, `###` for h3 headings, etc.
   - Use `*` or `-` for bullet points
   - Use `**text**` for bold, `*text*` for italic
   - Use `` `code` `` for inline code
   - Use ````js ... ```` for code blocks (with optional language)
   - Use `[link text](url)` for links
   - Use `![alt text](image-url)` for images

## Example Structure

```md
---
title: Getting Started with React
date: 2025-06-05
excerpt: A beginner's guide to React and its core concepts.
tags:
  - React
  - JavaScript
  - Web Development
---

This is the introduction paragraph for your article.

## First Section Heading

Content goes here...

### Subsection

More content with **bold text** and *italic text*.

- Bullet point 1
- Bullet point 2

## Code Examples

```js
function Example() {
  return <h1>Hello, world!</h1>;
}
```

## Conclusion

Summary and closing thoughts.
```

## Updating Articles

To update an existing article, simply edit the corresponding markdown file. The changes will be reflected when you rebuild and deploy your site. 