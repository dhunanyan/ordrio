# Ordrio [![Netlify Status](https://api.netlify.com/api/v1/badges/ec89ac37-1f1e-42ad-bfb6-dd424fdfc95d/deploy-status)](https://app.netlify.com/sites/ordrio/deploys)

Ordrio is a high-performance informational website built with **Next.js 14 App Router**, delivering a seamless and modern user experience. This repository includes the complete front-end codebase and configurations for setting up and deploying the application.

# Table of Contents

1. [Tech Stack](#🔧-tech-stack)
2. [Features](#✨-features)
3. [Installation](#⚙️-installation)
   1. [Clone the Repository](#1-clone-the-repository)
   2. [Install Dependencies](#2-install-dependencies)
4. [Available Scripts](#available-scripts)
   1. [🛠️ Development](#🛠️-development)
   2. [🔨 Build](#🔨-build)
   3. [🚩 Start](#🚩-start)
   4. [🧹 Lint](#🧹-lint)
5. [Project Structure](#project-structure)
6. [Linting and Code Formatting](#linting-and-code-formatting)
7. [🚀 Deployment](#🚀-deployment)
8. [License](#license)

## 🔧 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/docs/app) with the App Router.
- **Styling**: [SCSS](https://sass-lang.com/) (Sass).
- **Animation**: [Framer Motion](https://motion.dev/). -** Strongly typed codebase**: [TypeScript](https://www.typescriptlang.org/).
- **Utilities**:
  - `@svgr/webpack` for SVG handling.
  - `raw-loader` for importing raw assets.
  - `renderAnimatedCard` for parsing complex animations of all big cards individually, but within the same component
  - `renderAnimatedCardAssets` for rendering current animated card assets
  - `renderAnimatedCardBackground` for rendering current animated card animated background layout
- **Linting/Formatting**:
  - [ESLint](https://eslint.org/) for code quality.
  - [Prettier](https://prettier.io/) for consistent formatting.

## ✨ Features

- **Next.js 14 App Router**:
  - File-based routing using the latest routing system.
  - Improved data fetching via React Server Components.
- **SCSS Integration** for flexible and scalable styling.
- **Framer Motion** for smooth animations.
- **Husky & Lint-Staged** to enforce pre-commit quality checks.
- **TypeScript** support for robust and maintainable code.

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone git@github.com:dhunanyan/ordrio.git
cd ordrio
```

### 2. Install Dependencies

Ensure you have **Node.js >= 20.0.0** installed, run in the project root

```bash
nvm use
node -v
#v20.X.X
```

Install dependencies by running:

```bash
npm install
#OR
yarn install
```

## Available Scripts

### 🛠️ Development

Start the development server:

```bash
npm run dev
#OR
yarn dev
```

The app will be accessible at `https://localhost:3000`

### 🔨 Build

Generate a production build:

```bash
npm run build
#OR
yarn build
```

The output will be in the .next directory, optimized for performance.

### 🚩 Start

Run the production build locally:

```bash
npm run start
#OR
yarn start
```

### 🧹 Lint

Check for linting issues:

```bash
npm run lint
#OR
yarn lint
```

## Project Structure

The project follows a modular structure:

```r
public/ # Static assets (images, icons, etc.)
src/
  ↳ app/ # Next.js App Router pages
  ↳ components/ # Reusable UI components
  ↳ config/ # Config of the project (svg files, constants, enums, etc.)
  ↳ data/ # All the data of the website including HTML Meta data
  ↳ styles/ # SCSS Variables and Mixins
  ↳ utils/ # Utility functions and helpers
```

Key files:

- `package.json`: Project metadata and scripts.
- `tsconfig.json`: TypeScript configuration.
- `next.config.js`: NextJS configuration
- `.eslintrc.json`: ESLint rules.

## Linting and Code Formatting

Ordrio uses ESLint and Prettier for consistent code quality:

- Run `npm run lint` or `yarn lint` to check for issues.
- On each commit this script is being called automatically using [Husky](https://typicode.github.io/husky/)

## 🚀 Deployment

The `dev build` of the application is deployed using [Netlify](https://www.netlify.com/).

- Dev URL: https://ordrio.netlify.com
- Dev Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/ec89ac37-1f1e-42ad-bfb6-dd424fdfc95d/deploy-status)](https://app.netlify.com/sites/ordrio/deploys)

The production build can be accessed here: https://ordrio.com

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
