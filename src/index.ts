import { Scene } from "./scene";
import { Lazy } from "./util";

export * from "./components";
export * from "./templates";
export * from "./systems/shapes";
export * from "./systems/modules";

// Create the lazy-initializing scene.
export const scene = new Lazy<Scene>(() => {
    return new Scene();
});

export { settings } from "./settings";
export { Particle } from "./particles/particle";
export { Emitter } from "./particles/emitter";

export * as variation from "./systems/variation";
export * as sources from "./systems/sources";
export * as random from "./systems/random";
export * as math from "./systems/math";
export * as util from "./util";

/**
 * Forces the initialization of the otherwise lazy scene.
 */
export function forceInit(): void {
    scene.current;
}

export * as default from "./";
