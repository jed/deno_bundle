# deno-bundle

This is a temporary workaround to support bundling with sourcemaps in Deno. It's a drop-in replacement for `deno bundle` that uses `Deno.emit` to generate and inline the bundle's sourcemap.

## Installation

```sh
deno install --unstable --allow-read --allow-net --allow-write -f https://deno.land/x/deno_bundle/cli.js
```

## Usage

```sh
deno_bundle source_file [out_file]
```