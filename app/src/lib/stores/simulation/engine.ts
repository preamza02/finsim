// WASM-backed simulation engine wrapper
let _wasm: any = null;

async function loadWasm() {
    if (_wasm) return _wasm;
    // dynamic import of the wasm-pack generated package (web target)
    // this resolves to `app/src/lib/stores/simulation/pkg` after building with wasm-pack
    const pkg = await import("./pkg/finsim_simulation.js");
    _wasm = pkg;
    return _wasm;
}

export async function runSimulation(family: any, years: number = 50) {
    const m = await loadWasm();
    const res = m.run_simulation(JSON.stringify(family), years);
    return JSON.parse(res);
}
