# Matspar assignement

## Deployment link from Vercel

The application is deployed on vercel. You can visit it though this [link](https://matsar-assginement-zbfj-git-main-mastrangelis.vercel.app/search-results)

## Technologies and Modules

For the assignement you can find usefull information about the available scripts, the structure and how to run tests below.

For the project the following technologies and libraries are used

- NextJS 13
- React 18
- Typescript 4.9.5
- Axios
- React-Query
- Framer motion for beautiful and smooth transitions
- React skeleton loading
- Custom components, hooks, context
- SSR (Server-Side-Rendering)
- Functional and Unit testing with Jest/RTL
- Component Testing with storybook (manual testing)
- Dockerfile for containerizing the application
- Husky for some pre-commit scripts
- Eslint for linting code before commit
- Prettier for formatting

## Folder structure

- **pages** The pages of the application (3 pages) -> Search Results, Recent Searches, Search suggestions. The app starts by default rendering the first page (Search Results).
- **components** Custom JSX components
- **constants** Files containing some constant variables that are used across the application.
- **context** Context providers for variables and functions to be shared in components, e.g <SearchContext>
- **hooks**  Custom react hooks that are used across the application.
- **utils** Utility functions that are used across the application
- **Hoc** Folder that contains some high order component functions.
- **public** Static svgs
- ****tests**** Jest/RTL testing specs
- **reports** Contains coverage and html reports from unit and functional testing of the application with Jest and RTL
- **stories** Storybook stories for component manual testing and isolated development
- **styles** CSS styling in seperate files
- **Dockerfile** included in the root dir of the project
- Configuration files such as (tsconfig.json, next.config.js, .eslintrrc.json, .prettierrc.json, jest.config.js, jest.setup.ts, lint-stages.config.js) can be found at the root dir of the project

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits (due to hot-reload).\
You will also see any lint errors in the console.

### Dockerfile

To build the application using the provided Dockerfile you need to do the following steps

1. Build the image

```
docker build -t matspar-assignement .
```

2. Run a container with that image when the build is finished (port should be 3000 due to proxy)

```
docker run --name <your-container-name> -p 3000:3000 matspar-assignement
```

3. Open <http://localhost:3000> to view it in the browser.

## Storybook

Storybook is a frontend workshop for building UI components and pages in isolation.

Stories capture the “known good” states of UI components.

They’re a pragmatic, reproducible way to keep track of UI edge cases.

Reuse stories to power automated tests.

You can learn more about Storybook from the official [link](https://storybook.js.org/)

### `npm run storybook`

The above script will set up a development storybook server at port **6066**.

You can visit the dev server at **<http://localhost:6006/>**

When storybook dev server is up and running you will be able to see the following view

### Storybook preview
![Screenshot 2023-02-13 at 2 42 44 PM](https://user-images.githubusercontent.com/48323010/218460769-f37e0533-8d6b-4045-8df0-8751bc1c449d.png)


## Tests (Jest/RTL)

You can run all the unit and functional tests written by executing the command

### `npm run jest`

This will run all the tests under the ****tests**** directory and it will collect coverage and html reports into the **reports** folder.

### HTML report of tests
![Screenshot 2023-02-13 at 2 41 55 PM](https://user-images.githubusercontent.com/48323010/218460640-e6ad927f-4461-4353-b096-d2bb26113290.png)

### Tests coverage
![Screenshot 2023-02-13 at 2 42 02 PM](https://user-images.githubusercontent.com/48323010/218460650-53a245fa-383d-451d-b242-ffb2b54dcf96.png)


## Assignement Details

 1. All pages (all 3) have been implemented
 2. Navigation has been implemented
 3. Search component is shared accros the pages
 3. Search terms are stored in localstorage so every search from either page can be seen in recent searches
 4. Functionality for selecting with arrows and sumbmitting with enter from recent searches screen has been done.
 5. In search results page (page 1) every submitted term in the search form invokes the skeleton loading until the response from the server comes back
 6. In the search-suggestions page (page 3) instead of skeleton-loading we use a spinner while we wait for response from server

## Application Screenshots

### Mobile View
![Screenshot 2023-02-13 at 2 25 43 PM](https://user-images.githubusercontent.com/48323010/218458019-b92ecf37-8a2b-4983-8e2a-c379b35322c5.png)
![Screenshot 2023-02-13 at 2 25 57 PM](https://user-images.githubusercontent.com/48323010/218458032-b1f95a9d-93c1-4544-8a02-845fe31d6a4d.png)
![Screenshot 2023-02-13 at 2 26 03 PM](https://user-images.githubusercontent.com/48323010/218458039-3d448bdb-1c81-4838-ad08-882019d7120e.png)
![Screenshot 2023-02-13 at 2 26 11 PM](https://user-images.githubusercontent.com/48323010/218458044-2f4901a4-af6a-49e2-9f3e-e6ae91b0f93e.png)
![Screenshot 2023-02-13 at 2 26 25 PM](https://user-images.githubusercontent.com/48323010/218458051-0fe9a762-c81f-4f4b-b269-f47fb1bd5f43.png)
![Screenshot 2023-02-13 at 2 26 30 PM](https://user-images.githubusercontent.com/48323010/218458055-233cff21-acfe-41df-8df1-7ef7383f447f.png)
![Screenshot 2023-02-13 at 2 26 41 PM](https://user-images.githubusercontent.com/48323010/218458062-94c597be-1e6e-47c7-b44d-0dfbd8c4a4c2.png)
![Screenshot 2023-02-13 at 2 26 45 PM](https://user-images.githubusercontent.com/48323010/218458066-755c7d60-b2be-4f31-a8ce-adbf11fd3882.png)
![Screenshot 2023-02-13 at 2 26 58 PM](https://user-images.githubusercontent.com/48323010/218458069-73e17f64-3857-488e-96e9-cd418ff70223.png)

### Web View
![Screenshot 2023-02-13 at 2 28 35 PM](https://user-images.githubusercontent.com/48323010/218458077-064191cf-1266-457c-bb40-8c785772500b.png)
![Screenshot 2023-02-13 at 2 28 40 PM](https://user-images.githubusercontent.com/48323010/218458345-579afafb-5f72-4e35-9a11-abc75f47af2f.png)
![Screenshot 2023-02-13 at 2 28 48 PM](https://user-images.githubusercontent.com/48323010/218458354-e51695d0-17dc-4683-a103-553f812c7ceb.png)
