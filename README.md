# Ordrio [![Netlify Status](https://api.netlify.com/api/v1/badges/ec89ac37-1f1e-42ad-bfb6-dd424fdfc95d/deploy-status)](https://app.netlify.com/sites/ordrio/deploys)

Ordrio is a high-performance informational website built with **Next.js 14 App Router**, delivering a seamless and modern user experience. This repository includes the complete front-end codebase and configurations for setting up and deploying the application.

https://github.com/user-attachments/assets/32571828-f036-4eed-be67-720ae33f5361

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
8. [🎨 Color Pallette](#🎨-color-pallette)
9. [🖋️ Fonts](#🖋️-fonts)
10. [License](#license)

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

## 🎨 Color Pallette

<table >
  <td>

| **Color**                | **Hex**                                                                |
| ------------------------ | ---------------------------------------------------------------------- |
| $black-color             | ![#000000](https://via.placeholder.com/10/000000?text=+) `#64ffda`     |
| $black-color-border      | ![#000000](https://via.placeholder.com/10/000000?text=+) `#0000001a`   |
| $black-color-alt-opacity | ![#413b3b](https://via.placeholder.com/10/2d23231a?text=+) `#2d23231a` |
| $black-color-alt         | ![#2d2323](https://via.placeholder.com/10/2d2323?text=+) `#64ffda`     |
| $black-color-light       | ![#413b3b](https://via.placeholder.com/10/413b3b?text=+) `#64ffda`     |
| $grey-color-darker       | ![#767676](https://via.placeholder.com/10/767676?text=+) `#64ffda`     |
| $grey-color-dark         | ![#9e9fa4](https://via.placeholder.com/10/9e9fa4?text=+) `#64ffda`     |
| $white-color-light       | ![#f8fafc](https://via.placeholder.com/10/f8fafc?text=+) `#64ffda`     |
| $grey-color              | ![#ecf0f6](https://via.placeholder.com/10/ecf0f6?text=+) `#64ffda`     |
| $white-color             | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) `#64ffda`     |
| $white-color-alt         | ![#f0f0f0](https://via.placeholder.com/10/f0f0f0?text=+) `#64ffda`     |
| $white-blue-color        | ![#c7d7e8](https://via.placeholder.com/10/c7d7e8?text=+) `#64ffda`     |
| $white-blue-color-dark   | ![#d3d8de](https://via.placeholder.com/10/d3d8de?text=+) `#64ffda`     |
| $grey-blue-color         | ![#c7d7ef](https://via.placeholder.com/10/c7d7ef?text=+) `#64ffda`     |
| $cream-color             | ![#fff8da](https://via.placeholder.com/10/fff8da?text=+) `#64ffda`     |
| $light-white-color       | ![#f9faf5](https://via.placeholder.com/10/f9faf5?text=+) `#64ffda`     |
| $white-color-opacity     | ![#f8fafc](https://via.placeholder.com/10/ffffff8c?text=+) `#ffffff8c` |

  </td>
  <td>

| **Color**             | **Hex**                                                            |
| --------------------- | ------------------------------------------------------------------ |
| $cream-color-light    | ![#fff8b7](https://via.placeholder.com/10/fff8b7?text=+) `#64ffda` |
| $yellow-color-hover   | ![#ffe587](https://via.placeholder.com/10/ffe587?text=+) `#64ffda` |
| $yellow-color         | ![#fedf22](https://via.placeholder.com/10/fedf22?text=+) `#64ffda` |
| $yellow-color-dark    | ![#dcb400](https://via.placeholder.com/10/dcb400?text=+) `#64ffda` |
| $yellow-color-alt     | ![#e4d99a](https://via.placeholder.com/10/e4d99a?text=+) `#64ffda` |
| $yellow-color-light   | ![#f6eece](https://via.placeholder.com/10/f6eece?text=+) `#64ffda` |
| $yellow-color-light-2 | ![#ffeab9](https://via.placeholder.com/10/ffeab9?text=+) `#64ffda` |
| $blue-color           | ![#3355ff](https://via.placeholder.com/10/3355ff?text=+) `#64ffda` |
| $blue-color-hover     | ![#4466ff](https://via.placeholder.com/10/4466ff?text=+) `#64ffda` |
| $blue-color-dark      | ![#243d6f](https://via.placeholder.com/10/243d6f?text=+) `#64ffda` |
| $red-color            | ![#f2604b](https://via.placeholder.com/10/f2604b?text=+) `#64ffda` |
| $red-color-dark       | ![#a46565](https://via.placeholder.com/10/a46565?text=+) `#64ffda` |
| $red-color-light      | ![#ffe1cb](https://via.placeholder.com/10/ffe1cb?text=+) `#64ffda` |
| $pink-color           | ![#d3bafe](https://via.placeholder.com/10/d3bafe?text=+) `#64ffda` |
| $green-color          | ![#95edb2](https://via.placeholder.com/10/95edb2?text=+) `#64ffda` |
| $purple-color         | ![#7968ed](https://via.placeholder.com/10/7968ed?text=+) `#64ffda` |
| $purple-color-2       | ![#8766d7](https://via.placeholder.com/10/8766d7?text=+) `#64ffda` |

  </td>
</table>

## 🖋️ Fonts

| **Font**          | **Location**                              |
| ----------------- | ----------------------------------------- |
| $font-spoof-trial | [SpoofTrial](./src/app/fonts/SpoofTrial/) |
| $font-inter       | [SpoofTrial](./src/app/fonts/Inter/)      |
| $font-manrope     | [SpoofTrial](./src/app/fonts/Manrope/)    |

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
