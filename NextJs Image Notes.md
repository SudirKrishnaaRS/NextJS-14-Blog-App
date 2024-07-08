# NextJS Image Notes

## Introduction

This document outlines the key points from a video tutorial on handling images in Next.js. The `next/image` component provides an optimized way to serve images in Next.js applications.

## Table of Contents

1. Traditional `<img/>`
2. Next.js Image Component
3. Using Image Containers
4. Handling External Images
5. Common Issues
6. Summary

## Setting Up Images

- Upload images to the `public` folder of your Next.js project.
- Example: Drag and drop images into the `public` folder.

## Traditional HTML Image Tag

- To use an image in a page, use the standard HTML `<img>` tag.
- Example:
  ```jsx
  <img src="/about.png" alt="About Image" />
  ```
  Drawback: This method can lead to performance issues such as slower Largest Contentful Paint (LCP) and higher bandwidth usage because images are not optimized.

# Switching to Next.js Image Component

## Usecase 1: When using local images (with inline height and width)

- Import the next/image component:

  ```javascript
  import Image from "next/image";
  ```

- Replace the <img> tag with the Image component:

  ```jsx
  <Image src="/about.png" alt="About Image" width={500} height={500} />
  ```

  **_NOTE_** : The next/image component requires the src, width, and height attributes for basic usage.

- The Image component optimizes images automatically, improving performance.

### Image Optimization Details

- Next.js caches images and serves optimized versions.
- Optimized images are stored in the `_next` folder.

## Usecase 2: When using local images within a container (without inline height and width)

Using Image Containers :

- Create a container for the image and use the fill layout option.

- Example:

```jsx
<div className="image-container">
  <Image src="/about.png" alt="About Image" layout="fill" />
</div>
```

**_NOTE_** : You use `fill` and the container should be positioned `relative`.

- Ensure the container has position: relative and specify dimensions.

- Example CSS:

```css
.image-container {
  position: relative;
  width: 100%;
  height: 500px;
}
```

## Usecase 3: Handling External Images

- By default, Next.js does not allow external images.

Add allowed domains to next.config.js:

```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
};
```

- Use the Image component for external images:

```jsx
<Image
  src="https://images.pexels.com/photos/12345/example.jpg"
  alt="External Image"
  width={500}
  height={500}
/>
```

## Common Issues

1. Image not displaying: Ensure the width and height properties are specified.
2. External image blocked: Check that the domain is added in next.config.js.

## Summary

- Using the next/image component in Next.js not only helps with performance optimization but also simplifies handling different image sizes and formats.
- Always prefer using next/image over the standard <img> tag for better performance and optimization benefits.
