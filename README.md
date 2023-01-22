# SerVC Test Assignment Frontend React

Assignment should be made with [React](https://reactjs.org/docs/getting-started.html) framework.

Just use this repository as a [**template**](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to generate repo in your account and make an assignment in it.

Create a **new** branch, make the task in it, then make a **Pull Request** to the **main** branch, so we are able to review it and leave some comments if needed.

## Task
The application should fetch data from [Pokemon API](https://pokeapi.co/docs/v2) and render it:
* Create a view for the list of the pokemons on the main page with a pagination (site.com/)
* Create a view for a single pokemon on another page (site.com/{id})

### Extras (optional)
* Pokemon avatars not provided, so you can find them and add to your project or just use some placeholder api like [this](https://ui-avatars.com/) or [this](https://www.stefanjudis.com/blog/apis-to-generate-random-user-avatars/).
* Deploy it somewhere (e.g. [Vercel](https://vercel.com/), [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/), [Heroku](https://www.heroku.com/), [Firebase](https://firebase.google.com/), etc.)

## Info
There are already predefined API calls (`src/api/pokemon.api.ts`) to make requests to the Pokemon API.

It’s **bad** practice to use [*any*](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) or to not use types at all in typescript, so try to make typings for all your code.

Screenshots in the `design` folder can be used as a reference for you, but you can make your own design if you want. Just do it with CSS (css modules, scss, tailwind, etc.), not with a predefined component library like MaterialUI or Bootstrap.

## Useful Links

Routing in React - https://reactrouter.com/en/main

Typescript object types to make nice typings - https://www.typescriptlang.org/docs/handbook/2/objects.html

Documentation for the API:
* https://pokeapi.co/docs/v2#resource-listspagination-section - to get a list
* https://pokeapi.co/docs/v2#pokemon - to get a single

## Commands
Start development server - `npm run dev`.

Build project - `npm run build`.
