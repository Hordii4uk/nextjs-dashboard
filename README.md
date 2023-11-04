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



  # Benefits to fetching data with React Server Components:

    - Server Components execute on the server, so you can keep expensive data fetches and logic on the server and only send the result to the client.
    - Server Components support promises, providing a simpler solution for asynchronous tasks like data fetching. You can use async  /await syntax without reaching out for useEffect, useState or data fetching libraries.
    - Since Server Components execute on the server, you can query the database directly without an additional API layer.
    


  # Static Rendering
  
    With Static Rendering, data fetching and rendering happens on the server at build time (when you deploy) or during revalidation. 
    The result can then be distributed and cached (stored) in a CDN. Whenever a user visits your application, the cached result is served.

    Static Rendering is useful for UI has no data or has data that is shared across users
    -  Faster Websites - Prerendered content can be cached. This ensures that users around the world can access your website's content more quickly and reliably.
    -  Reduced Server Load - Because the content is cached, your server does not have to dynamically generate content for each user request.
    -  SEO - Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.
    

    
    # 
    Streaming and Server Components in React opens up the possibility for new rendering models that weren't possible before.
    Partial Prerendering is an experimental feature introduced in Next.js 14


  # Dynamic Functions
    Route Handlers can be used with dynamic functions from Next.js, like cookies, headers, noStore() etc. , your whole route becomes dynamic
    When a user visits a route:

    -  A static route shell is served, this makes the initial load fast.
    -  The shell leaves holes where dynamic content will load in async.
    -  The async holes is loaded in parallel, reducing the overall load time of the page.
    The great thing about Partial Prerendering is that you don't need to change your code to use it. 
    As long as you're using Suspense to wrap the dynamic parts of your route, Next.js will know which parts of your route are static and which are dynamic.
    Suspense is used as a boundary between the static and dynamic parts of your route


    Benefits of implementing search with URL params:
      -  Bookmarkable and Shareable URLs: Since the search parameters are in the URL, users can bookmark the current state of the application, including their search queries and filters, for future reference or sharing.
      -  Server-Side Rendering and Initial Load: URL parameters can be directly consumed on the server to render the initial state, making it easier to handle server rendering.
      -  Analytics and Tracking: Having search queries and filters directly in the URL makes it easier to track user behavior without requiring additional client-side logic.


  # Search functionality
    There are three Next.js client hooks that you'll use to implement the search functionality:
      - useSearchParams- Allows you to access the parameters of the current URL. For example, the search params for this URL /dashboard/invoices?page=1&query=pending would look like this: {page: '1', query: 'pending'}.
      - usePathname - Lets you read the current URL's pathname
      - useRouter - Enables navigation between routes within client components programmatically.
      Here's a quick overview of the implementation steps:
      -  Capture the user's input.
      -  Update the URL with the search params.
      -  Keep the URL in sync with the input field.
      -  Update the table to reflect the search query.

    ❓ When to use the useSearchParams() hook vs. the searchParams prop?
      You might have noticed you used two different ways to extract search params. Whether you use one or the other depends on whether you're working on the client or the server.
      <Search> is a Client Component, so you used the useSearchParams() hook to access the params from the client.
      <Table> is a Server Component that fetches its own data, so you can pass the searchParams prop from the page to the component.
      As a general rule, if you want to read the params from the client, use the useSearchParams() hook as this avoids having to go back to the server.