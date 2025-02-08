# research-website-template

This is a React + Next.js template meant for research websites. See a [demo of the template here](https://tovacinni.github.io/research-website-template/). My own [personal website](https://tovacinni.github.io) is also built with the same template.

In practice it could probably be used by anyone.

It is meant to be customizeable, all through modifying the `src/data` - which have arrays of objects that are used to generate the website.

For example, `src/data/publication.ts` contains an array like:

```typescript
export const publicationData: Publication[] = [
  {
    year: "2023",
    conference: "International Conference on Machine Learning (ICML)",
    title: "Robust Causal Discovery Under Distribution Shift",
    authors: "Jane Smith, Xue Chen, Sarah Johnson",
    paperUrl: "https://arxiv.org/abs/2302.13095",
    codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  },
];
```

To update your website, you can simply add objects to the array.

The schemas are defined in the same files, and many fields are optional for flexibility:

```typescript
export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}
```

Any field with a `?` at the end is optional. Filling them in will create the UI components corresponding to them automatically.

You can also change the order of the sections in `src/data/section-order.ts`, and if you want full customization you can just edit the React components in `src/components`.

This project was birthed from annoyance over HTML + CSS templates- such as the very popular [Jon Barron template](https://github.com/jonbarron/website). The Jon Barron template is amazing because it is simple & complete which is why it's so popular- but over time, maintenance becomes difficult from the amount of duplicate code it creates (the Jon Barron index is now over 4000 lines of code). This is meant to be a much more minimal (to maintain) alternative (and was a good way to spend a few hours to build over holiday weekend).

## Prerequisites

First, install Node.js and npm through the [Node.js official website](https://nodejs.org/).

Verify installation by running:

```bash
node --version
npm --version
```

## Installation

1. Fork the repository

2. Clone the repository

   ```bash
   git clone [your-repository-url]
   cd [repository-name]
   ```

3. Install dependencies

   Inside the repository, run:

   ```bash
   npm install
   ```

## Running the Application

1. To start the development server, run (in the repository directory):

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying onto GitHub Pages

1. Fork or clone this repo and push to your own repository at `[your-github-username].github.io`.

2. In your repository settings, ensure the repository name matches `[your-github-username].github.io` if you want it to be your main GitHub Pages site.

3. Push your changes to the main branch.

4. Go to the GitHub page for your repository and go to `Settings` then `Pages`. If you set Source to be `GitHub Actions`, it should suggest you a build script for Next.js.

5. Commit the build script and see things building.

Your site should now be live at `https://[your-github-username].github.io/`.

## Deploying to your own domain

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/) from the creators of Next.js.

1. Create a [Vercel account](https://vercel.com/signup) if you haven't already
2. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
3. Import your repository on Vercel
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

## Contributing

Feel free to drop a pull request whenever!
