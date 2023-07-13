# Intercepting Routes Demo Application
This is a demo application built with Next.js 13 to showcase the usage of intercepting routes and parallel routes feature. The purpose of this application is to demonstrate how to load a route within the current layout while keeping the context for the current page.

## Routing Paradigm
The routing paradigm used in this demo application allows for intercepting a certain route to show a different route while maintaining the context of the current page. Here we show a modal overlay with the image of the animal within the gallery page. The modal overlay is a separate route that is loaded within the gallery page. The gallery page is not reloaded when the modal overlay is shown.

## Development

1. Clone the repo

```
git clone https://github.com/JaleelB/wildpics.git
```

2. Install packages

```
yarn
```

3. Run the app
```
yarn dev
```

## Deploy to vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JaleelB/wildpics)