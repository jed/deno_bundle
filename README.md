# deno_bundle

This is a temporary workaround to support bundling with sourcemaps in [Deno](https://deno.land). It's a drop-in replacement for the [deno bundle](https://deno.land/manual/tools/bundler) CLI that uses the [Deno.emit](https://deno.land/manual/typescript/runtime#denoemit) API to generate and inline the bundle's sourcemap.

## Installation

```sh
deno install --unstable --allow-read --allow-net --allow-write -f https://deno.land/x/deno_bundle/cli.js
```

## Usage

```sh
deno_bundle source_file [out_file]
```