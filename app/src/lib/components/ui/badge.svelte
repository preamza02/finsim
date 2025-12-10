<script lang="ts">
	import { cn } from "$lib/utils/index.js";
	import type { HTMLAttributes } from "svelte/elements";

	interface $$Props extends HTMLAttributes<HTMLDivElement> {
		variant?: "default" | "secondary" | "destructive" | "outline";
		class?: string;
	}

	export let variant: $$Props["variant"] = "default";
	let className: string | undefined = undefined;
	export { className as class };

	const variantClasses = {
		default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
		secondary:
			"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive:
			"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
		outline: "text-foreground",
	};
</script>

<div
	class={cn(
		"inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
		variantClasses[variant],
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
