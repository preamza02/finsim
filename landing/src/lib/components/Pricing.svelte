<script lang="ts">
  let selectedRegion: 'th' | 'global' = 'th';

  const thaiPlans = [
    {
      name: 'Open Source',
      price: 'Free',
      period: 'forever',
      description: 'Full-featured, self-hosted on your machine.',
      features: [
        'Full financial simulation engine',
        'Monte Carlo analysis',
        'Retirement projections',
        'Tax optimization tools',
        'All core features',
        'Community support via GitHub',
      ],
      cta: 'Get Started',
      ctaLink: 'https://github.com/preamza02/finsim',
      highlighted: false,
    },
    {
      name: 'Day Pass',
      price: '฿49',
      period: '24 hours',
      description: 'Perfect for monthly planning sessions.',
      features: [
        'Full Pro access for 24 hours',
        'Simulation engine unlocked',
        'Tax optimization tools',
        'Scenario comparisons',
        'Export reports',
        'Pay only when you need it',
      ],
      cta: 'Buy Day Pass',
      ctaLink: '#',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Monthly',
      price: '฿129',
      period: '/month',
      description: 'For power users who plan frequently.',
      features: [
        'Everything in Day Pass',
        'Unlimited access',
        'Priority support',
        'Early access to features',
        'Cancel anytime',
      ],
      cta: 'Subscribe Monthly',
      ctaLink: '#',
      highlighted: false,
    },
    {
      name: 'Yearly',
      price: '฿999',
      period: '/year',
      description: 'Best value for committed planners.',
      features: [
        'Everything in Monthly',
        'Save ฿549 vs monthly',
        '2 months free',
        'Priority support',
        'Shape the roadmap',
      ],
      cta: 'Subscribe Yearly',
      ctaLink: '#',
      highlighted: false,
    },
  ];

  const globalPlans = [
    {
      name: 'Open Source',
      price: 'Free',
      period: 'forever',
      description: 'Full-featured, self-hosted on your machine.',
      features: [
        'Full financial simulation engine',
        'Monte Carlo analysis',
        'Retirement projections',
        'Tax optimization tools',
        'All core features',
        'Community support via GitHub',
      ],
      cta: 'Get Started',
      ctaLink: 'https://github.com/preamza02/finsim',
      highlighted: false,
    },
    {
      name: 'Day Pass',
      price: '$3.99',
      period: '24 hours',
      description: 'Perfect for monthly planning sessions.',
      features: [
        'Full Pro access for 24 hours',
        'Simulation engine unlocked',
        'Tax optimization tools',
        'Scenario comparisons',
        'Export reports',
        'Pay only when you need it',
      ],
      cta: 'Buy Day Pass',
      ctaLink: '#',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Monthly',
      price: '$11.99',
      period: '/month',
      description: 'For power users who plan frequently.',
      features: [
        'Everything in Day Pass',
        'Unlimited access',
        'Priority support',
        'Early access to features',
        'Cancel anytime',
      ],
      cta: 'Subscribe Monthly',
      ctaLink: '#',
      highlighted: false,
    },
    {
      name: 'Yearly',
      price: '$99.99',
      period: '/year',
      description: 'Best value for committed planners.',
      features: [
        'Everything in Monthly',
        'Save $43 vs monthly',
        '2+ months free',
        'Priority support',
        'Shape the roadmap',
      ],
      cta: 'Subscribe Yearly',
      ctaLink: '#',
      highlighted: false,
    },
  ];

  $: plans = selectedRegion === 'th' ? thaiPlans : globalPlans;
</script>

<section id="pricing" class="section-padding bg-white">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Open Core model: Self-host for free forever, or use our cloud service with flexible Day Pass pricing.
      </p>

      <!-- Region Toggle -->
      <div class="inline-flex items-center bg-gray-100 rounded-lg p-1">
        <button
          class="px-4 py-2 rounded-md text-sm font-medium transition-colors {selectedRegion === 'th' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}"
          on:click={() => selectedRegion = 'th'}
        >
          🇹🇭 Thailand (PromptPay)
        </button>
        <button
          class="px-4 py-2 rounded-md text-sm font-medium transition-colors {selectedRegion === 'global' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}"
          on:click={() => selectedRegion = 'global'}
        >
          🌍 Global (Stripe)
        </button>
      </div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {#each plans as plan}
        <div class="relative p-6 rounded-2xl border-2 {plan.highlighted ? 'border-primary-500 shadow-xl' : 'border-gray-200'} bg-white flex flex-col">
          {#if plan.highlighted && plan.badge}
            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
              <span class="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {plan.badge}
              </span>
            </div>
          {/if}
          
          <div class="text-center mb-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
            <div class="flex items-baseline justify-center gap-1">
              <span class="text-3xl font-bold text-gray-900">{plan.price}</span>
              <span class="text-gray-500 text-sm">{plan.period}</span>
            </div>
            <p class="text-gray-600 mt-3 text-sm">{plan.description}</p>
          </div>

          <ul class="space-y-3 mb-6 flex-grow">
            {#each plan.features as feature}
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 text-sm">{feature}</span>
              </li>
            {/each}
          </ul>

          <a 
            href={plan.ctaLink}
            target={plan.ctaLink.startsWith('http') ? '_blank' : undefined}
            rel={plan.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
            class="block w-full text-center py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-200 {plan.highlighted ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}"
          >
            {plan.cta}
          </a>
        </div>
      {/each}
    </div>

    <!-- Lifetime Option -->
    <div class="mt-12 max-w-2xl mx-auto">
      <div class="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center border border-primary-100">
        <h3 class="text-xl font-bold text-gray-900 mb-2">Lifetime Access</h3>
        <p class="text-gray-600 mb-4">One-time payment, forever access. Support the mission.</p>
        <div class="flex items-center justify-center gap-8 mb-6">
          <div>
            <span class="text-2xl font-bold text-gray-900">฿9,999</span>
            <span class="text-gray-500 text-sm ml-1">THB</span>
          </div>
          <div class="text-gray-300">|</div>
          <div>
            <span class="text-2xl font-bold text-gray-900">$999.99</span>
            <span class="text-gray-500 text-sm ml-1">USD</span>
          </div>
        </div>
        <a href="#" class="btn-primary inline-flex items-center gap-2">
          Get Lifetime Access
        </a>
      </div>
    </div>
  </div>
</section>
