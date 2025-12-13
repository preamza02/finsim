<script lang="ts">
	import { cn } from "$lib/utils/index.js";
	import type { HTMLAttributes } from "svelte/elements";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		class?: string;
	}

	let className: string | undefined = undefined;
	export { className as class };
</script>

<div
	class={cn("rounded-lg border border-gray-100 bg-card text-card-foreground shadow-sm", className)}
	{...$$restProps}
>
	<slot />
</div>
