<script lang="ts">
  let selectedView: "cloud" | "opensource" = "cloud";

  // Helper to detect external links
  function isExternalLink(href: string): boolean {
    if (!href) return false;
    return (
      /^(https?:)?\/\//.test(href) ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    );
  }

  const cloudPlans = [
    {
      name: "Free",
      price: "฿0",
      period: "Forever",
      description:
        "For users who are just starting their financial freedom journey.",
      features: [
        "Plan Saved (Read-only)",
        "1 Financial Plan",
        "Cash-Flow Projections",
        "Tax Optimization",
        "Export Plan as Json, Excel",
        "Start Your Financial Freedom Journey",
      ],
      cta: "Get Started with 7 Day Free Trial",
      ctaLink: "#",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "฿129",
      period: "/month",
      description: "For power users who plan frequently.",
      features: [
        "Everything in Free Plan",
        "Unlimited Financial Plan",
        "Scenario comparisons",
        "Simulation engine unlocked",
        "Make Me Smile",
        "Cancel anytime",
      ],
      cta: "Get Started with 7 Day Free Trial",
      ctaLink: "#",
      highlighted: true,
      badge: "Recommend",
    },
    {
      name: "Day Pass",
      price: "฿49",
      period: "24 hours",
      description: "Perfect for monthly planning sessions.",
      features: [
        "Full Pro access for 24 hours",
        "Pay as you go",
        "Perfect for monthly planning sessions",
      ],
      cta: "Get Started with 7 Day Free Trial",
      ctaLink: "#",
      highlighted: false,
    },
  ];

  const openSourceFeatures = [
    "Full financial simulation engine",
    "Monte Carlo analysis",
    "Retirement projections",
    "Tax optimization tools",
    "All core features",
    "Self-hosted on your machine",
    "Complete data privacy",
    "No usage limits",
    "Community support via GitHub",
    "Contribute & shape the future",
  ];
</script>

<section id="pricing" class="section-padding bg-white">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Open Source model: Self-host for free forever, or use our cloud service
        with flexible Day Pass pricing.
      </p>

      <!-- Cloud/Open Source Toggle -->
      <div class="inline-flex items-center bg-gray-100 rounded-lg p-1">
        <button
          class="px-4 py-2 rounded-md text-sm font-medium transition-colors {selectedView ===
          'cloud'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'}"
          on:click={() => (selectedView = "cloud")}
        >
          ☁️ Cloud
        </button>
        <button
          class="px-4 py-2 rounded-md text-sm font-medium transition-colors {selectedView ===
          'opensource'
            ? 'bg-white text-gray-900 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'}"
          on:click={() => (selectedView = "opensource")}
        >
          💻 Open Source
        </button>
      </div>
    </div>

    {#if selectedView === "cloud"}
      <!-- Cloud Pricing -->
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {#each cloudPlans as plan}
          <div
            class="relative p-6 rounded-2xl border-2 {plan.highlighted
              ? 'border-primary-500 shadow-xl'
              : 'border-gray-200'} bg-white flex flex-col"
          >
            {#if plan.highlighted && plan.badge}
              <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                <span
                  class="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {plan.badge}
                </span>
              </div>
            {/if}

            <div class="text-center mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <div class="flex items-baseline justify-center gap-1">
                <span class="text-3xl font-bold text-gray-900"
                  >{plan.price}</span
                >
                <span class="text-gray-500 text-sm">{plan.period}</span>
              </div>
              <p class="text-gray-600 mt-3 text-sm">{plan.description}</p>
            </div>

            <ul class="space-y-3 mb-6 flex-grow">
              {#each plan.features as feature}
                <li class="flex items-start gap-2">
                  <svg
                    class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-gray-700 text-sm">{feature}</span>
                </li>
              {/each}
            </ul>

            <a
              href={plan.ctaLink}
              target={isExternalLink(plan.ctaLink) ? "_blank" : undefined}
              rel={isExternalLink(plan.ctaLink)
                ? "noopener noreferrer"
                : undefined}
              class="block w-full text-center py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-200 {plan.highlighted
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}"
            >
              {plan.cta}
            </a>
          </div>
        {/each}
      </div>

      <!-- Lifetime Option -->
      <div class="mt-12 max-w-2xl mx-auto">
        <div
          class="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center border border-primary-100"
        >
          <h3 class="text-xl font-bold text-gray-900 mb-2">Lifetime Access</h3>
          <p class="text-gray-600 mb-4">
            One-time payment, forever access. Support the mission.
          </p>
          <div class="mb-6">
            <span class="text-3xl font-bold text-gray-900">฿9,999</span>
          </div>
          <a href="#" class="btn-primary inline-flex items-center gap-2">
            Get Lifetime Access
          </a>
        </div>
      </div>
    {:else}
      <!-- Open Source -->
      <div class="max-w-2xl mx-auto">
        <div class="bg-white rounded-2xl border-2 border-gray-200 p-8">
          <div class="text-center mb-8">
            <div
              class="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Open Source</h3>
            <div class="flex items-baseline justify-center gap-2 mb-2">
              <span class="text-4xl font-bold text-primary-600">Free</span>
              <span class="text-gray-500">forever</span>
            </div>
            <p class="text-gray-600">
              Full-featured, self-hosted on your machine. No limits, no strings
              attached.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-4 mb-8">
            {#each openSourceFeatures as feature}
              <div class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-gray-700 text-sm">{feature}</span>
              </div>
            {/each}
          </div>

          <div class="text-center">
            <a
              href="https://github.com/preamza02/finsim"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary inline-flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              Get Started on GitHub
            </a>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>
