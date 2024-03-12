#🚀 Website-UI

### `Decription`
The project focuses on the remodeling and creation of a blog for Kodify's website. The main objective is to achieve a modern and visually appealing aesthetic aligned with the latest trends in user interface (UI) design. Additionally, there is a significant emphasis on enhancing the user experience to ensure more intuitive and accessible navigation.s

### `Objective`

Redesign and creation of the Kodify blog to improve the interface and user experience.

### `Requirements`

**Supported operating systems**:

- Ubuntu LTS/Debian 9.x
- macOS Mojave
- Windows 10

**Project Stability and Versioning:**

To maintain project stability, it's crucial to adhere to recommended versions of Next-js and Node.js. The project currently utilizes:

| Next-Js Version  |  Node.js Version  |    Turborepo  | 
| ---------------  | ----------------- | --------------|
|     14.1.2       |     20.11.0       |    1.12.5     |

Please ensure that your development environment matches these versions for optimal performance and compatibility.

### `develop`

Download and Run the Project Locally

```
git clone git@github.com:KodifyDevs/newwebsite.ui.git

cd newwbsite.ui

npm install
```

### `Getting Started`

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

# Turborepo starter

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```