<script lang="ts">
  import { Card, CardContent, Button } from "$lib/components/ui";
  import { Zap, Beaker, Code2, ChevronRight, ExternalLink } from "lucide-svelte";

  const docs = [
    {
      title: 'Getting Started',
      description: 'Learn how to set up FinSim and run your first financial simulation.',
      icon: Zap,
      links: [
        { label: 'Installation Guide', href: 'https://github.com/preamza02/finsim#getting-started' },
        { label: 'Quick Start Tutorial', href: 'https://github.com/preamza02/finsim#development' },
        { label: 'Basic Concepts', href: 'https://github.com/preamza02/finsim#about' },
      ],
    },
    {
      title: 'Core Features',
      description: 'Deep dive into the main features and how to use them effectively.',
      icon: Beaker,
      links: [
        { label: 'Retirement Modeling', href: 'https://github.com/preamza02/finsim#planned-features' },
        { label: 'Monte Carlo Analysis', href: 'https://github.com/preamza02/finsim#planned-features' },
        { label: 'Tax Strategies', href: 'https://github.com/preamza02/finsim#planned-features' },
      ],
    },
    {
      title: 'API Reference',
      description: 'Technical documentation for developers and contributors.',
      icon: Code2,
      links: [
        { label: 'Configuration Options', href: 'https://github.com/preamza02/finsim#development' },
        { label: 'Data Formats', href: 'https://github.com/preamza02/finsim#development' },
        { label: 'Contributing Guide', href: 'https://github.com/preamza02/finsim#contributing' },
      ],
    },
  ];
</script>

<section id="docs" class="section-padding bg-gray-50">
  <div class="container-custom">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Documentation
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Everything you need to get started and make the most of FinSim.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {#each docs as doc}
        <Card class="hover:border-primary-200 hover:shadow-lg transition-all duration-300">
          <CardContent class="p-8">
            <div class="w-12 h-12 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center mb-6">
              <svelte:component this={doc.icon} class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{doc.title}</h3>
            <p class="text-gray-600 mb-6">{doc.description}</p>
            <ul class="space-y-3">
              {#each doc.links as link}
                <li>
                  <a href={link.href} class="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 group">
                    <ChevronRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    {link.label}
                  </a>
                </li>
              {/each}
            </ul>
          </CardContent>
        </Card>
      {/each}
    </div>

    <div class="text-center mt-12">
      <Button 
        href="https://github.com/preamza02/finsim"
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
      >
        View Full Documentation on GitHub
        <ExternalLink class="w-4 h-4 ml-2" />
      </Button>
    </div>
  </div>
</section>
