# Next.js 14 Complete Course 2024 | Next.js 14 Full Stack App

Next.js 14 full-stack app project using app router, server actions, MongoDB, Auth.js. Learn Next.js in 2024.

YT : https://youtu.be/vCOSTG10Y4o?si=y-5gJhckcp25vqLw

## Getting Started with Local Development

The project was created using `create-next-app` which sets up everything automatically for you.

```bash
npx create-next-app@latest
```

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Topics Covered

Concepts alongside with Timestamp

## 01: App Router (V.Easy)

Detailed Notes: https://github.com/SudirKrishnaaRS/NextJS-14-Blog-App/blob/main/notes/NextJs%20App%20Router%20notes.md

    Topics :
        - App Router Overview
        - Routes
        - Nested Routes
        - Dynamic Routes

    Link :
         https://youtu.be/vCOSTG10Y4o?si=3n4CPvRhC5aj7Gpy&t=576

    Timestamp :
           09:35

<img width="879" alt="image" src="https://github.com/SudirKrishnaaRS/next14-starter/assets/67383465/4057e790-fdd2-4074-9e52-48cf4b5bbb96">

    References / Links :
        - https://nextjs.org/docs/app/building-your-application/routing/colocation

## 02 : Layout

    Topics :
        - Layout overview
        - Use case: useful to add Header and Footer once and it reflects on all pages.
        - `layout.js` or `layout.jsx`
        - Layout for a particular route (eg. when you create a `layout.jsx` file inside `blog` folder even your nested routes like `blog/1` would have the common layout which you written in `layout.jsx` file)

    Link :
         https://youtu.be/vCOSTG10Y4o?si=utHVIGEBXT-rWwnW&t=1130

    Timestamp :
           18:50 Next.js Layouts Explained

## 03 : Next.js Loading, Error, Not Found Pages

    Topics :
        - Loading: `loading.jsx`
        - Error: `error.jsx`
             (NOTE: This should be a client component  "use client")
        - Not Found : `not-found.jsx`

    Link :
         https://youtu.be/vCOSTG10Y4o?si=utHVIGEBXT-rWwnW&t=1130

    Timestamp :
           28:00

## 04 : CSS Modules

    Topics :
        - CSS Modules
        - Usage : Helps in easy development as it generates unique class names thus not causing any overrides in styles.
        - Advantages of CSS Modules over normal CSS

    Link :
         https://youtu.be/vCOSTG10Y4o?si=8Ll6vvfOwY0yJ6z9&t=2152

    Timestamp :
           35:52

## 05 : NextJS Image

Detailed Notes : https://github.com/SudirKrishnaaRS/next14-starter/blob/main/notes/NextJs%20Image%20Notes.md

    Topics :
        - Traditional <img/>
        - Next.js Image Component
        - Using Image Containers
        - Handling External Images
        - Common Issues:
            1) Image not displaying: Ensure the width and height properties are specified.
            2) External image blocked: Check that the domain is added in next.config.js.

    Link :
         https://youtu.be/vCOSTG10Y4o?si=b7l15WJqxRWQVLG2&t=3571

    Timestamp :
           59:30

## 06 : NextJS Rendering

Detailed Notes: https://github.com/SudirKrishnaaRS/next14-starter/blob/main/notes/NextJS%20Rendering%20-%20SSR%2CCSR.md

    Topics :
        - Server Component - default
        - Client Component - "use client";
        - SSR vs CSR

    Link :
         https://youtu.be/vCOSTG10Y4o?si=E9MyjsKV9-TuV728&t=6516

    Timestamp :
           01:48:35

### SSR vs CSR (With Pros and Cons)

![image](https://github.com/SudirKrishnaaRS/next14-starter/assets/67383465/74452366-c6bc-4190-8a60-4c32cb58db89)

### Example of having Server Components and Client Components combined

![image](https://github.com/SudirKrishnaaRS/next14-starter/assets/67383465/011f45c0-2876-4266-8750-5bb5ab3f9397)

## 07: Next.js 14 Hydration Error and the Solutions (V.Easy)

    Topics :
        - What is Hydration?
        - Why Hydration Error
        - How to resolve Hydration Error

#### a) Code Workaround using useState and useEffect to conditionally render JSX only when it's Client side render

            Example-

![Screenshot 2024-07-12 at 11 32 28 AM](https://github.com/user-attachments/assets/759adb4c-c1b3-4e4f-beff-45d90e925b8d)

#### b) Using dynamic import (with SSR flag set to false)

            Example-

![image](https://github.com/user-attachments/assets/c18d7aa9-2f77-4524-84bd-90c263dee3a6)

#### c) Using the `suppressHydrationWarning` key in JSX

            Example-

![Screenshot 2024-07-12 at 11 36 08 AM](https://github.com/user-attachments/assets/6f4fe5f1-fdfd-41da-8229-6df90473f041)

    Link :
         https://youtu.be/vCOSTG10Y4o?si=jfkoS81yIJdGGETn&t=7101

    Timestamp :
           01:58:20

### FAQ

1. What happens when you wrap your server components with a Client component?

   Ans. The children of your Client component would still be a Server Component as it's just a wrapper

## 08: Navigations

Detailed Examples for Client Side Navigations: https://github.com/SudirKrishnaaRS/NextJS-14-Blog-App/blob/main/src/app/navigationtest/page.jsx

    Topics :
        - Client Side Navigations
            - useRouter() : Navigate via code like router.push() ,
              replace(""), back(), forward();
            - usePathname(): Useful to get the current path name
            - useSearchParams(): Useful to get the current query params
        - Server Side Navigations
            - Params: useful to get the current path name on the server-side components  (logged in terminal)

<img width="1175" alt="Screenshot 2024-07-15 at 6 41 33 PM" src="https://github.com/user-attachments/assets/359b9e36-d8b9-46be-860f-873dc835ecc6">
            - searchParams : useful to get the current query params in server-side components
<img width="1175" alt="Screenshot 2024-07-15 at 6 42 55 PM" src="https://github.com/user-attachments/assets/0dc99e01-2bd0-4000-a261-c44ea70b19a0">

    Link :
         https://youtu.be/vCOSTG10Y4o?si=Sw-h_SHrPWxmfwuO&t=7675

    Timestamp :
           02:07:55

## 09: NextJS Data Fetching (V.Easy)

Detailed Example: https://github.com/SudirKrishnaaRS/NextJS-14-Blog-App/blob/main/src/app/blog/page.jsx

    Topics :
        - How to do Data Fetching?
        - Caching, No caching
        - Revalidate the cache periodically

    Link :
         https://youtu.be/vCOSTG10Y4o?si=T_8iC41snN1oe7yR&t=8246

    Timestamp :
           02:17:26

## 10: NextJS Suspense (V.Easy)

Detailed Example: https://github.com/SudirKrishnaaRS/NextJS-14-Blog-App/blob/main/src/app/blog/%5Bslug%5D/page.jsx

    Topics :
        - Suspense (same as react)
        - Useful for showing loading

![Screenshot 2024-07-16 at 1 11 31 PM](https://github.com/user-attachments/assets/66d6e68a-2e79-4d8d-9e75-91f72603dede)

    Link :
         https://youtu.be/vCOSTG10Y4o?si=gBIRN65zwRxoc8kP&t=8698

    Timestamp :
           02:24:58

## 11: NextJS SEO (V.Easy)

    Topics:
        - SEO Basics (Page Title and Description)
        - SEO for different pages based on Template
        - Dynamic SEO for pages with dynamic (API) data

Example for Dynamic SEO:  
![Screenshot 2024-08-13 at 5 23 03 PM](https://github.com/user-attachments/assets/29df8d6c-3e7d-4be6-b7ec-917adf3d7582)

    Link :
         https://youtu.be/vCOSTG10Y4o?si=8FmAh_Otp9KInuqI&t=10851

    Timestamp :
           03:00:51

## 12: NextJS Server Actions (V.Easy)

    Topics:
        - Server Actions

    When to use?
        - Is Server Actions a replacement for API ? 
            Answer : When your application is simple and small it can be a replacement for API but if it has multiple tables and a large schema then API is the best.

    NOTE:
    - `use server` is mandatory for server actions
    - When using server actions the function should always be `async` irrespective of what you do
    
Simple Example of Server Action and how to use :
![Screenshot 2024-08-26 at 4 31 59 PM](https://github.com/user-attachments/assets/5527a22e-f2c5-45c5-a76b-d0468807084f)

    Link :
         https://youtu.be/vCOSTG10Y4o?si=2vWgcXWipbzEWOA0&t=11157

    Timestamp :
          03:05:57
