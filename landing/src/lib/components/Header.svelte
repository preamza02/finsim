<script lang="ts">
  let mobileMenuOpen = false;

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#docs', label: 'Documentation' },
    { href: '#pricing', label: 'Pricing' },
    { href: 'https://github.com/preamza02/finsim', label: 'GitHub', external: true },
  ];
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
  <nav class="container-custom">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2">
        <svg class="w-8 h-8 text-primary-600" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="currentColor"/>
          <path d="M8 12L16 8L24 12L16 16L8 12Z" fill="white"/>
          <path d="M8 16L16 20L24 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 20L16 24L24 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-xl font-bold text-gray-900">FinSim</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navLinks as link}
          <a 
            href={link.href} 
            class="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </a>
        {/each}
      </div>

      <!-- CTA Button -->
      <div class="hidden md:block">
        <a href="https://github.com/preamza02/finsim" target="_blank" rel="noopener noreferrer" class="btn-primary">
          Get Started
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2 text-gray-600 hover:text-gray-900"
        aria-label="Toggle menu"
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
      <div class="md:hidden pb-4">
        {#each navLinks as link}
          <a 
            href={link.href} 
            class="block py-2 text-gray-600 hover:text-gray-900 font-medium"
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            on:click={() => mobileMenuOpen = false}
          >
            {link.label}
          </a>
        {/each}
        <a href="https://github.com/preamza02/finsim" target="_blank" rel="noopener noreferrer" class="btn-primary inline-block mt-4">
          Get Started
        </a>
      </div>
    {/if}
  </nav>
</header>
