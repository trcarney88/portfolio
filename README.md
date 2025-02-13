# Personal Site for Todd Carney

The core of the site is written in Astro. It is deployed via SST to AWS.

There is one API endpoint

## API

`POST /contact`: This endpoint is used to send the email if someone fills out the contact from on the site

## Useful Stuff

### Links

(Astro)[https://astro.build/]

(SST)[https://sst.dev/]

(Tailwind UI)[https://tailwindui.com/components]

(Tailwind CSS)[https://tailwindcss.com/]

### Deploying

#### Development

run `pnpm sst dev` for local development so you have the api up and running at dev.trcarney.com/dev.

#### Deploying a Dev version

run `pnpm sst deploy` to fully deploy your changes to dev.trcarney.com. The API will go to api.trcarney.com/dev

#### Deploying to prod

This should only be done via the github action
