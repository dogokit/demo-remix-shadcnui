# Demo Remix shadcn/ui

- [Remix](https://remix.run/docs)
- [shadcn/ui](https://github.com/shadcn/ui)

## Development

Run the dev server:

```sh
bun dev
```

## Deployment

First, build your app for production:

```sh
bun run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `bun build`

- `build/server`
- `build/client`
