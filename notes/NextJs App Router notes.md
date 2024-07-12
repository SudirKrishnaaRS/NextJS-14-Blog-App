# Next.js 14 App Router Explained

## Introduction

- The App Router is a key feature in Next.js 14, simplifying routing by eliminating the need for additional libraries and configurations.
- Uses the `app` directory for creating and managing pages.

## Key Features

- **Automatic Routing**: No need for explicit route definitions; routes are inferred from the file structure.
- **File-based Routing**: Create pages by placing files in the `app` directory.
- **Nested Routing**: Supports nested routes through nested directories.
- **Dynamic Routes**: Easily create routes with dynamic parameters.

## Setup

- Ensure Next.js 14 is installed.
- Initialize a project if not already done:
  ```sh
  npx create-next-app@latest my-next-app
  cd my-next-app
  ```

# Creating Pages

#### Home Page: Create app/page.js.

```javascript
// app/page.js
export default function HomePage() {
  return <h1>Home Page</h1>;
}
```

#### About Page: Create app/about/page.js.

```javascript
// app/about/page.js
export default function AboutPage() {
  return <h1>About Page</h1>;
}
```

# Nested Routes

Nested Pages in About: Create subdirectories for nested routes.

```javascript
// app/about/company/page.js
export default function AboutCompanyPage() {
return <h1>About Company</h1>;
}

// app/about/career/page.js
export default function AboutCareerPage() {
return <h1>About Career</h1>;
}
```
