# Lago Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/lago)](https://www.npmjs.com/package/@fern-api/lago)

The Lago Node.js library provides access to the Lago API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://lago.mintlify.app/api-reference/intro).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-hyfjke?file=app.ts&view=editor)

```typescript
import { LagoApiClient } from '@fern-api/lago';

const client = new LagoApiClient({
  token: 'MY_TOKEN',
});

const response = await client.subscriptions.create({
  subscription: {
    externalCustomerId: '5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba',
    planCode: 'code',
    name: 'display name',
    externalId: 'id',
    billingTime: 'anniversary',
    subscriptionAt: '2022-08-08T00:00:00Z',
  },
});

console.log('Received response from Lago!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-lago/lago-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
