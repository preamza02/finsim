<script lang="ts">
  import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button, Badge } from "$lib/components/ui";
  import { CheckCircle2, Github } from "lucide-svelte";

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
      name: "Pro",
      price: "฿129",
      period: "/month",
      description: "For power users who plan frequently.",
      features: [
        "Unlimited Financial Plan",
        "Scenario comparisons",
        "Simulation engine unlocked",
        "Cash-Flow Projections",
        "Tax Optimization",
        "Export Plan as Json, Excel",
        "Make Me Smile",
        "Cancel anytime",
      ],
      cta: "Get Started with 7 Day Free Trial",
      ctaLink: "/wizard/intro",
      highlighted: true,
      badge: "Recommend",
    },
    {
      name: "Pro Yearly",
      price: "฿999",
      period: "/year",
      description: "Best value - Save 2 months with annual billing.",
      features: [
        "Unlimited Financial Plan",
        "Scenario comparisons",
        "Simulation engine unlocked",
        "Cash-Flow Projections",
        "Tax Optimization",
        "Export Plan as Json, Excel",
        "Priority support",
        "Early access to new features",
        "Cancel anytime",
      ],
      cta: "Get Started with 7 Day Free Trial",
      ctaLink: "/wizard/intro",
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
        Open Source model: Self-host for free, or use our cloud service
        with flexible pricing.
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
      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {#each cloudPlans as plan}
          <Card
            class="relative {plan.highlighted
              ? 'border-2 border-primary-500 shadow-xl'
              : ''} flex flex-col"
          >
            {#if plan.highlighted && plan.badge}
              <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge class="bg-primary-600 text-white">
                  {plan.badge}
                </Badge>
              </div>
            {/if}

            <CardHeader class="text-center">
              <CardTitle class="text-lg mb-2">{plan.name}</CardTitle>
              <div class="flex items-baseline justify-center gap-1">
                <span class="text-3xl font-bold text-gray-900"
                  >{plan.price}</span
                >
                <span class="text-gray-500 text-sm">{plan.period}</span>
              </div>
              <CardDescription class="mt-3">{plan.description}</CardDescription>
            </CardHeader>

            <CardContent class="flex-grow flex flex-col">
              <ul class="space-y-3 mb-6 flex-grow">
                {#each plan.features as feature}
                  <li class="flex items-start gap-2">
                    <CheckCircle2 class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span class="text-gray-700 text-sm">{feature}</span>
                  </li>
                {/each}
              </ul>

              <Button 
                href={plan.ctaLink}
                target={isExternalLink(plan.ctaLink) ? "_blank" : undefined}
                rel={isExternalLink(plan.ctaLink) ? "noopener noreferrer" : undefined}
                class="w-full {plan.highlighted ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}"
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        {/each}
      </div>

      <!-- Lifetime Option -->
      <div class="mt-12 max-w-2xl mx-auto">
        <Card class="bg-gradient-to-r from-primary-50 to-accent-50 border-primary-100">
          <CardContent class="p-8 text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Lifetime Access</h3>
            <p class="text-gray-600 mb-4">
              One-time payment, forever access. Support the mission.
            </p>
            <div class="mb-6">
              <span class="text-3xl font-bold text-gray-900">฿9,999</span>
            </div>
            <Button 
              href="/wizard/intro"
              class="bg-primary-600 hover:bg-primary-700 text-white"
            >
              Get Lifetime Access
            </Button>
          </CardContent>
        </Card>
      </div>
    {:else}
      <!-- Open Source -->
      <div class="max-w-2xl mx-auto">
        <Card class="border-2">
          <CardContent class="p-8">
            <div class="text-center mb-8">
              <div
                class="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Github class="w-8 h-8" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Open Source</h3>
              <div class="flex items-baseline justify-center gap-2 mb-2">
                <span class="text-4xl font-bold text-primary-600">Self-hosted</span>
              </div>
              <p class="text-gray-600">
                Full-featured, self-hosted on your machine. No limits, no strings
                attached.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-4 mb-8">
              {#each openSourceFeatures as feature}
                <div class="flex items-start gap-2">
                  <CheckCircle2 class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span class="text-gray-700 text-sm">{feature}</span>
                </div>
              {/each}
            </div>

            <div class="text-center">
              <Button 
                href="https://github.com/preamza02/finsim"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-primary-600 hover:bg-primary-700 text-white"
              >
                <Github class="w-5 h-5 mr-2" />
                Get Started on GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    {/if}
  </div>
</section>
