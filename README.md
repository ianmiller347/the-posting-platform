# The Posting Platform

Create your own platform for user generated content by using this package. You can clone it and it modify it, or use the provided CLI.

You can input certain params to tell the script how to generate your package. It will randomly generate some configs for you, so your site is fairly unique every time you run the generation script. You can input some params to describe how your platform should look, and it will set a few different things accordingly.

## Developing locally

Run `yarn install` to get the dependencies installed.

To run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Setting your IDE to work with this project

If you use VSCode, it's a good idea to have this in your settings.json:

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.validate": [
    "javascript",
    "typescript",
    "typescriptreact"
],
```

For tailwind, visit [their docs](https://tailwindcss.com/docs/editor-setup) on setting up your editor to stop complaining.
In VSCode, open the settings, search for 'unknown', the first result should be the one you’re looking for: CSS > Lint: Unknown At Rules. Set it to 'ignore'.

### Coding style

For React components, use TitleCaseNaming both in the filename and for the component itself. The folder it lives in should have the same name and it should have an index.ts file which exports the MyComponentName file's default export.

For CSS, use BEM syntax and dash-casing for classnames. Don't use camelCasing in CSS at all.

You should be able to get

## NextJS Info

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
