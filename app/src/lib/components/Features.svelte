<script lang="ts">
  const features = [
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`,
      title: 'Retirement Projections',
      description: 'Model your retirement with customizable assumptions. See how different scenarios affect your financial future.',
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`,
      title: 'Monte Carlo Simulations',
      description: 'Run thousands of market scenarios to understand the probability of achieving your financial goals.',
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
      title: 'Tax Optimization',
      description: 'Optimize your withdrawal strategy across different account types to minimize taxes over your lifetime.',
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
      title: 'Privacy First',
      description: 'Your financial data stays on your device. No cloud storage, no third-party access, complete privacy.',
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
      title: 'Open Source',
      description: 'Fully transparent codebase. Audit the algorithms, contribute improvements, or fork for your needs.',
    },
    {
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>`,
      title: 'Thai Context',
      description: 'Built for Thai FIRE movement. Includes Thai Pension, GPF, Gold, Condo Rent vs Buy scenarios.',
    },
  ];
</script>

<section id="features" class="section-padding bg-white">
  <div class="container-custom">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Everything You Need for Financial Planning
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Powerful features to help you understand and plan your financial future, 
        all without compromising your privacy.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature}
        <div class="p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 bg-white">
          <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
            {@html feature.icon}
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p class="text-gray-600">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
