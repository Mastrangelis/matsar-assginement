# Matspar assignement

## Deployment link from Vercel

The application is deployed on vercel. You can visit it though this [link](https://matsar-assginement-zbfj-git-deployment-mastrangelis.vercel.app/search-results)

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

## Tests (Jest/RTL)

You can run all the unit and functional tests written by executing the command

### `npm run jest`

This will run all the tests under the ****tests**** directory and it will collect coverage and html reports into the **reports** folder.
