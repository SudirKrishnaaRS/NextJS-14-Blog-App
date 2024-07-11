# Next.js Rendering: Server-Side vs Client-Side

## Introduction

Next.js offers two main types of rendering: Server-Side Rendering (SSR) and Client-Side Rendering (CSR). This document explains both rendering methods, their pros and cons, and how they are used in Next.js.

## Table of Contents

1. [Server-Side Rendering (SSR)](#server-side-rendering-ssr)
2. [Client-Side Rendering (CSR)](#client-side-rendering-csr)
3. [Comparison of SSR and CSR](#comparison-of-ssr-and-csr)
4. [Rendering in Next.js](#rendering-in-nextjs)
5. [Combining Server and Client Components](#combining-server-and-client-components)
6. [Examples and Best Practices](#examples-and-best-practices)

## Server-Side Rendering (SSR)

![image](https://github.com/SudirKrishnaaRS/next14-starter/assets/67383465/8f83adcb-6d06-4661-948f-856e0ac37e92)

- **Traditional Method**: Before single-page app frameworks like React, SSR was the standard.
- **Process**:
  1. User sends a request to the server by visiting a URL.
  2. The server renders the page, creates an HTML file, and sends it back to the user's browser.
  3. The browser displays the page immediately but it's not interactive initially.
  4. Browser then downloads JavaScript files to add interactivity.
- **Pros**:
  - Faster initial page load as HTML is fully rendered on the server.
  - Better for SEO since the content is immediately available to search engines.
  - Beneficial for users with old devices or slow internet connections.
- **Cons**:
  - Less interactive during the initial load.
  - Increased server load as each request requires server-side rendering.
  - More complex state management.
  - Slower subsequent page loads compared to CSR.

## Client-Side Rendering (CSR)

![image](https://github.com/SudirKrishnaaRS/next14-starter/assets/67383465/fa73f3a6-8133-438f-b592-1dacdf6120a4)


- **Modern Method**: Commonly used with single-page applications like React.
- **Process**:
  1. User sends a request to the server.
  2. Server sends back an empty HTML file along with a JavaScript bundle.
  3. Browser uses JavaScript to build the web application, rendering the page.
  4. The page becomes viewable and interactive once JavaScript finishes execution.
- **Pros**:
  - Faster navigation between pages after the initial load.
  - Lower server load as rendering is done on the client side.
  - Best for user interactivity.
- **Cons**:
  - Slower initial load as the browser must download and execute JavaScript.
  - SEO can be affected as content isn't immediately available.
  - Heavily dependent on client resources; older devices may struggle.

## Comparison of SSR and CSR

- **Initial Page Load**:
  - **SSR**: Faster initial load with immediate content visibility.
  - **CSR**: Slower initial load due to client-side rendering.
- **Subsequent Page Loads**:
  - **SSR**: Can be slower due to repeated server rendering.
  - **CSR**: Faster due to single-page application nature.
- **Server Load**:
  - **SSR**: Higher server load.
  - **CSR**: Lower server load.
- **SEO**:
  - **SSR**: Better for SEO.
  - **CSR**: Requires additional configurations for SEO.
- **User Interactivity**:
  - **SSR**: Less interactive initially.
  - **CSR**: Immediate interactivity after load.

## Rendering in Next.js

- **Default Approach**: Next.js defaults to SSR for pages and components.
- **Adding Interactivity**:

  - Use the `use client` directive at the top of a file to make a component client-side.
  - Example:

    ```javascript
    // In a client-side component
    import { useState } from "react";

    export default function InteractiveComponent() {
      const [count, setCount] = useState(0);

      return (
        <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
      );
    }
    ```

## Combining Server and Client Components

- **Flexible Structure**: Next.js allows combining SSR and CSR components.
- **Usage**:

  - Default components are server-side.
  - Add `use client` directive to client-side components.
  - Example:

    ```jsx
    // Server component
    import Navbar from "./Navbar"; // Server component by default

    // Client component
    import InteractiveChart from "./InteractiveChart"; // Use `use client` directive

    function Page() {
      return (
        <div>
          <Navbar />
          <main>
            <InteractiveChart />
          </main>
        </div>
      );
    }
    ```

  - Ensure client-side components use React hooks and interact with the user.

## Examples and Best Practices

- **Proving SSR**:

  - Console log on the server-side shows messages in the terminal.
  - Example:

    ```javascript
    // pages/contact.js
    export default function Contact() {
      console.log("It works on the server side");

      return <div>Contact Page</div>;
    }
    ```

- **Proving CSR**:

  - Use `use client` directive and console log shows messages in the browser console.
  - Example:

    ```javascript
    // components/ClientComponent.js
    "use client";

    import { useEffect } from "react";

    export default function ClientComponent() {
      useEffect(() => {
        console.log("It works on the client side");
      }, []);

      return <div>Client Component</div>;
    }
    ```

- **Best Practices**:
  - Use SSR for content that benefits from SEO and faster initial load.
  - Use CSR for highly interactive parts of the application.
  - Combine SSR and CSR strategically for optimal performance and user experience.
