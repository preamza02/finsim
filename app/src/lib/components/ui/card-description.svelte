<script lang="ts">
	import { cn } from "$lib/utils/index.js";
	import type { HTMLAttributes } from "svelte/elements";

	interface $$Props extends HTMLAttributes<HTMLParagraphElement> {
		class?: string;
	}

	let className: string | undefined = undefined;
	export { className as class };
</script>

<p class={cn("text-sm text-muted-foreground", className)} {...$$restProps}>
	<slot />
</p>
