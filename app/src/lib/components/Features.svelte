<script lang="ts">
  import { Card, CardContent } from "$lib/components/ui";
  import { BarChart3, TrendingUp, DollarSign, Shield, Code2, LayoutGrid } from "lucide-svelte";

  const features = [
    {
      icon: BarChart3,
      title: 'Retirement Projections',
      description: 'Model your retirement with customizable assumptions. See how different scenarios affect your financial future.',
    },
    {
      icon: TrendingUp,
      title: 'Monte Carlo Simulations',
      description: 'Run thousands of market scenarios to understand the probability of achieving your financial goals.',
    },
    {
      icon: DollarSign,
      title: 'Tax Optimization',
      description: 'Optimize your withdrawal strategy across different account types to minimize taxes over your lifetime.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your financial data stays on your device. No cloud storage, no third-party access, complete privacy.',
    },
    {
      icon: Code2,
      title: 'Open Source',
      description: 'Fully transparent codebase. Audit the algorithms, contribute improvements, or fork for your needs.',
    },
    {
      icon: LayoutGrid,
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
        <Card class="hover:border-primary-200 hover:shadow-lg transition-all duration-300">
          <CardContent class="p-6">
            <div class="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
              <svelte:component this={feature.icon} class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p class="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
