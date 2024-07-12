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

# Dynamic Routes

Dynamic Blog Post: Use square brackets to define dynamic routes.

```javascript
// app/blog/[slug]/page.js
import { useRouter } from "next/router";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Post: {slug}</h1>;
}
```

- Dynamic routes handle parameters like post IDs or slugs.

# Grouping Routes

Grouping Authentication Pages: Use parentheses for grouping related pages without affecting the URL structure.

```plaintext
app/(auth)/login/page.js
app/(auth)/register/page.js
app/(auth)/forgot-password/page.js
```

## Benefits

- Simplicity: No need for additional configuration or libraries for routing.
- Scalability: Easily manage a growing number of pages and routes.
- Flexibility: Group related routes for better organization without affecting the URL structure.

## Example: Creating a Navigation Bar Component

Create a reusable navigation bar component.

```javascript
// app/components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/auth/login">Login</Link>
    </nav>
  );
}
```

Use the component in your pages.

```javascript
// app/page.js
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
    </div>
  );
}
```

## Conclusion

- The Next.js 14 App Router streamlines routing with its file-based approach, supporting static, dynamic, and nested routes effortlessly.
- Grouping routes and creating reusable components enhance the maintainability and scalability of your Next.js application.
