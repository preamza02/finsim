// WASM-backed simulation engine wrapper
let _wasm: any = null;

/**
 * Loads and caches the WebAssembly package used by the simulation engine.
 *
 * @returns The loaded WASM module; subsequent calls return the cached module.
 */
async function loadWasm() {
    if (_wasm) return _wasm;
    // dynamic import of the wasm-pack generated package (web target)
    // this resolves to `app/src/lib/stores/simulation/pkg` after building with wasm-pack
    const pkg = await import("./pkg/finsim_simulation.js");
    _wasm = pkg;
    return _wasm;
}

/**
 * Runs the WASM-backed simulation for a family and returns the simulation results.
 *
 * @param family - The input family data structure to simulate; will be serialized to JSON before processing.
 * @param years - Number of years to simulate (defaults to 50).
 * @returns The simulation result parsed from the WASM module's JSON output
 */
export async function runSimulation(family: any, years: number = 50) {
    const m = await loadWasm();
    const res = m.run_simulation(JSON.stringify(family), years);
    return JSON.parse(res);
}