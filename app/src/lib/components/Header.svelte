<script lang="ts">
  import { onMount } from "svelte";
  import { Button } from "$lib/components/ui";
  import { Menu, User } from "lucide-svelte";
  import { page } from "$app/stores";
  import { signOut } from "@auth/sveltekit/client";
  import { PUBLIC_AUTH_ENABLED } from "$env/static/public";

  let mobileMenuOpen = false;
  let userMenuOpen = false;
  
  $: session = $page.data.session;
  $: authEnabled = PUBLIC_AUTH_ENABLED === 'true';

  const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/#docs", label: "Documentation" },
    { href: "/#pricing", label: "Pricing" },
    {
      href: "https://github.com/preamza02/finsim",
      label: "GitHub",
      external: true,
    },
  ];

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && mobileMenuOpen) {
      mobileMenuOpen = false;
    }
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (mobileMenuOpen && !target.closest("nav")) {
      mobileMenuOpen = false;
    }
    if (userMenuOpen && !target.closest(".user-menu")) {
      userMenuOpen = false;
    }
  }
  
  async function handleSignOut() {
    await signOut({ callbackUrl: "/" });
  }

  onMount(() => {
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
>
  <nav class="container-custom">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2">
        <svg
          class="w-8 h-8 text-primary-600"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="8" fill="currentColor" />
          <path d="M8 12L16 8L24 12L16 16L8 12Z" fill="white" />
          <path
            d="M8 16L16 20L24 16"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 20L16 24L24 20"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="text-xl font-bold text-gray-900">FinSim</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navLinks as link}
          <a
            href={link.href}
            class="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            {link.label}
          </a>
        {/each}
      </div>

      <!-- CTA Button / User Menu -->
      <div class="hidden md:block">
        {#if authEnabled && session?.user}
          <div class="relative user-menu">
            <button
              on:click={() => (userMenuOpen = !userMenuOpen)}
              class="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="User menu"
              aria-expanded={userMenuOpen}
            >
              {#if session.user.image}
                <img src={session.user.image} alt={session.user.name || 'User'} class="w-8 h-8 rounded-full" />
              {:else}
                <div class="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                  <User class="w-4 h-4 text-white" />
                </div>
              {/if}
              <span class="text-gray-700 font-medium">{session.user.name || 'User'}</span>
            </button>
            
            {#if userMenuOpen}
              <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                <a href="/dashboard" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</a>
                <button
                  on:click={handleSignOut}
                  class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            {/if}
          </div>
        {:else if authEnabled}
          <Button 
            href="/auth/signin"
            class="bg-primary-600 hover:bg-primary-700 text-white"
          >
            Sign In
          </Button>
        {:else}
          <Button 
            href="https://github.com/preamza02/finsim"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-primary-600 hover:bg-primary-700 text-white"
          >
            Get Started
          </Button>
        {/if}
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 text-gray-600 hover:text-gray-900"
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
      >
        <Menu class="w-6 h-6" aria-hidden="true" />
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
      <div id="mobile-menu" class="md:hidden pb-4" role="menu">
        {#each navLinks as link}
          <a
            href={link.href}
            class="block py-2 text-gray-600 hover:text-gray-900 font-medium"
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            on:click={() => (mobileMenuOpen = false)}
          >
            {link.label}
          </a>
        {/each}
        {#if authEnabled && session?.user}
          <div class="pt-4 border-t border-gray-200 mt-4">
            <div class="flex items-center gap-2 mb-2">
              {#if session.user.image}
                <img src={session.user.image} alt={session.user.name || 'User'} class="w-8 h-8 rounded-full" />
              {:else}
                <div class="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                  <User class="w-4 h-4 text-white" />
                </div>
              {/if}
              <span class="text-gray-700 font-medium">{session.user.name || 'User'}</span>
            </div>
            <a href="/dashboard" class="block py-2 text-gray-600 hover:text-gray-900 font-medium">Dashboard</a>
            <button
              on:click={handleSignOut}
              class="w-full text-left py-2 text-gray-600 hover:text-gray-900 font-medium"
            >
              Sign Out
            </button>
          </div>
        {:else if authEnabled}
          <Button 
            href="/auth/signin"
            class="bg-primary-600 hover:bg-primary-700 text-white mt-4 w-full"
          >
            Sign In
          </Button>
        {:else}
          <Button 
            href="https://github.com/preamza02/finsim"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-primary-600 hover:bg-primary-700 text-white mt-4 w-full"
          >
            Get Started
          </Button>
        {/if}
      </div>
    {/if}
  </nav>
</header>
