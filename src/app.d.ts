// See https://kit.svelte.dev/docs/types#app

import { ChartType, TooltipPositionerFunction } from "chart.js";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module 'chart.js' {
	interface TooltipPositionerMap {
		custom: TooltipPositionerFunction<ChartType>;
	}
}

export {};
