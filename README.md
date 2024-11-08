# Crowd Funding App

### Steps for Running locally

-   [Click here](https://metamask.io/download/) to Install Metamask Extension for your browser, and set it up with some LineaETH.

-   Clone the repo into your folder

    ```
    git clone https://github.com/shaharsh624/crowd-funding-app
    ```

*   Then perform the following steps

    ```
    cd client
    ```

    ```
    npm install
    ```

    ```
    npm run dev
    ```

    The App will run on http://localhost:5173

<br>
<br>

---

# Other Extra Stuff

# Client

Starter template to build onchain applications with [thirdweb](https://thirdweb.com) and [vite](https://vitejs.dev/).

## Features

-   thirdweb & vite pre-installed and configured to reduce setup steps
-   ConnectButton to onboard users to your application

## Installation

Install the template using [thirdweb create](https://portal.thirdweb.com/cli/create)

```bash
  npx thirdweb create app --vite
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

`CLIENT_ID`

To learn how to create a client ID, refer to the [client documentation](https://portal.thirdweb.com/typescript/v5/client).

## Run locally

Install dependencies

```bash
yarn
```

Start development server

```bash
yarn dev
```

Create a production build

```bash
yarn build
```

Preview the production build

```bash
yarn preview
```

## Additional Resources

-   [Documentation](https://portal.thirdweb.com/typescript/v5)
-   [Templates](https://thirdweb.com/templates)
-   [YouTube](https://www.youtube.com/c/thirdweb)
-   [Blog](https://blog.thirdweb.com)

## Need help?

For help or feedback, please [visit our support site](https://thirdweb.com/support)

# Web3 Contract

## Getting Started

Create a project using this example:

```bash
npx thirdweb create --contract --template hardhat-javascript-starter
```

You can start editing the page by modifying `contracts/Contract.sol`.

To add functionality to your contracts, you can use the `@thirdweb-dev/contracts` package which provides base contracts and extensions to inherit. The package is already installed with this project. Head to our [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) to learn more.

## Building the project

After any changes to the contract, run:

```bash
npm run build
# or
yarn build
```

to compile your contracts. This will also detect the [Contracts Extensions Docs](https://portal.thirdweb.com/contractkit) detected on your contract.

## Deploying Contracts

When you're ready to deploy your contracts, just run one of the following command to deploy you're contracts:

```bash
npm run deploy
# or
yarn deploy
```

> [!IMPORTANT]
> This requires a secret key to make it work. Get your secret key [here](https://thirdweb.com/dashboard/settings/api-keys).
> Pass your secret key as a value after `-k` flag.
>
> ```bash
> npm run deploy -- -k <your-secret-key>
> # or
> yarn deploy -k <your-secret-key>
> ```

## Releasing Contracts

If you want to release a version of your contracts publicly, you can use one of the followings command:

```bash
npm run release
# or
yarn release
```

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
