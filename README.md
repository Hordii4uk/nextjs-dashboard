## Next.js App Router Course - Final

This is the final template for the Next.js App Router Course. It contains the final code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.



# Folder structure

  /app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
  /app/lib: Contains functions used in your application, such as reuseable utility functions and data fetching functions.
  /app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
  /public: Contains all the static assets for your application, such as images.
  /scripts/: Contains a file that you'll use to populate your database in a later chapter.
  Config Files: You'll also notice config files such as next.config.js at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.

  First, you're importing the <SideNav /> component into your layout. Any components you import into this file will be part of the layout.

  The Layout component receives a children prop. The child can either be a page or another layout.



  # Root Layout (Required)

  The app directory must include a root layout.
    -  The root layout must define <html> and <body> tags since Next.js does not automatically create them.
    -  You can use the built-in SEO support to manage <head> HTML elements, for example, the <title> element.
    -  You can use route groups to create multiple root layouts. See an example here.
    -  The root layout is a Server Component by default and can not be set to a Client Component.