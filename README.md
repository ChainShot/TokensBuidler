## Install

To get started you'll need to install dependencies with `npm install`.

## Deployment

In the `builder.config.js` file you'll find that the `kovan` network has been setup with `process.env` properties.

In order to fill these files out you'll need to create a `.env` file. This file will be ignored by the `.gitignore` so you don't accidentally commit up any secret variables!

In the `.env` file fill out the three values:

```
PRIVATE_KEY=0xabc...
INFURA_SECRET=abc...
INFURA_ENDPOINT=https://...
```

You'll need to grab a private key that has kovan ether in order to deploy on kovan. Then you'll need the `INFURA_SECRET` and `INFURA_ENDPOINT` from your infura account.

Once you have this setup, simply run `npx buidler run scripts/deploy.js --network kovan` to deploy to kovan!
