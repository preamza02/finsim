<script lang="ts">
	import { cn } from "$lib/utils/index.js";
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from "svelte/elements";

	type ButtonProps = HTMLButtonAttributes & {
		variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
		size?: "default" | "sm" | "lg" | "icon";
		class?: string;
		href?: never;
	};

	type LinkProps = HTMLAnchorAttributes & {
		variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
		size?: "default" | "sm" | "lg" | "icon";
		class?: string;
		href: string;
	};

	type $$Props = ButtonProps | LinkProps;

	export let variant: $$Props["variant"] = "default";
	export let size: $$Props["size"] = "default";
	export let href: string | undefined = undefined;
	let className: string | undefined = undefined;
	export { className as class };

	const variantClasses = {
		default: "bg-primary text-primary-foreground hover:bg-primary/90",
		destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
		outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
		secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
		ghost: "hover:bg-accent hover:text-accent-foreground",
		link: "text-primary underline-offset-4 hover:underline",
	};

	const sizeClasses = {
		default: "h-10 px-4 py-2",
		sm: "h-9 rounded-md px-3",
		lg: "h-11 rounded-md px-8",
		icon: "h-10 w-10",
	};

	const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
</script>

{#if href}
	<a
		{href}
		class={cn(
			baseClasses,
			variantClasses[variant],
			sizeClasses[size],
			className
		)}
		{...$$restProps}
	>
		<slot />
	</a>
{:else}
	<button
		type="button"
		class={cn(
			baseClasses,
			variantClasses[variant],
			sizeClasses[size],
			className
		)}
		{...$$restProps}
		on:click
		on:keydown
	>
		<slot />
	</button>
{/if}
