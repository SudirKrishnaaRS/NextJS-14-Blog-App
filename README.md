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

## 01 : App Router (V.Easy)

Detailed Notes : https://github.com/SudirKrishnaaRS/NextJS-14-Blog-App/blob/main/notes/NextJs%20App%20Router%20notes.md

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
        - Usecase : useful to add Header and Footer once and it reflects in all pages.
        - `layout.js` or `layout.jsx`
        - Layout for a particular route (eg. when you create a `layout.jsx` file inside `blog` folder even your nested routes like `blog/1` would have the common layout which you written in `layout.jsx` file)

    Link :
         https://youtu.be/vCOSTG10Y4o?si=utHVIGEBXT-rWwnW&t=1130

    Timestamp :
           18:50 Next.js Layouts Explained

## 03 : Next.js Loading, Error, Not Found Pages

    Topics :
        - Loading: `loading.jsx`
        - Error : `error.jsx`
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

Detailed Notes : https://github.com/SudirKrishnaaRS/next14-starter/blob/main/notes/NextJS%20Rendering%20-%20SSR%2CCSR.md

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

## 07 : Next.js 14 Hydration Error and the Solutions (V.Easy)

    Topics :
        - What is Hydration?
        - Why Hydration Error
        - How to resolve Hydration Error
            a) Code Work around using useState and useEffect to conditionally render JSX only when it's Client side render
![Screenshot 2024-07-12 at 11 32 28 AM](https://github.com/user-attachments/assets/759adb4c-c1b3-4e4f-beff-45d90e925b8d)

            b) Using dynamic import (with SSR flag set to false)
            Example-
![image](https://github.com/user-attachments/assets/c18d7aa9-2f77-4524-84bd-90c263dee3a6)


            c) Using `suppressHydrationWarning` key in JSX

    Link :
         https://youtu.be/vCOSTG10Y4o?si=jfkoS81yIJdGGETn&t=7101

    Timestamp :
           01:58:20
