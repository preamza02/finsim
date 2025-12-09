WASM Simulation crate

This crate contains the Rust implementation of the simulation engine and is intended to be compiled to WebAssembly via `wasm-pack`.

Build (from `app/`):

```bash
# install wasm-pack if you don't have it:
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

# from the `app/` directory run:
pnpm run build:wasm
```

This produces a JS + WASM package under `app/src/lib/stores/simulation/pkg` which the Svelte app can import.

Notes:
- The Rust function exposed is `run_simulation(family_json: &str, years: u32) -> String` which returns a JSON string of results.
- We keep a backup of the original TypeScript sources in `app/src/lib/stores/simulation/ts_backup/`.
