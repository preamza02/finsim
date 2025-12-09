<script lang="ts">
  import { Card, CardContent, Button } from "$lib/components/ui";

  const docs = [
    {
      title: 'Getting Started',
      description: 'Learn how to set up FinSim and run your first financial simulation.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
      links: [
        { label: 'Installation Guide', href: 'https://github.com/preamza02/finsim#getting-started' },
        { label: 'Quick Start Tutorial', href: 'https://github.com/preamza02/finsim#development' },
        { label: 'Basic Concepts', href: 'https://github.com/preamza02/finsim#about' },
      ],
    },
    {
      title: 'Core Features',
      description: 'Deep dive into the main features and how to use them effectively.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`,
      links: [
        { label: 'Retirement Modeling', href: 'https://github.com/preamza02/finsim#planned-features' },
        { label: 'Monte Carlo Analysis', href: 'https://github.com/preamza02/finsim#planned-features' },
        { label: 'Tax Strategies', href: 'https://github.com/preamza02/finsim#planned-features' },
      ],
    },
    {
      title: 'API Reference',
      description: 'Technical documentation for developers and contributors.',
      icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
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
              {@html doc.icon}
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{doc.title}</h3>
            <p class="text-gray-600 mb-6">{doc.description}</p>
            <ul class="space-y-3">
              {#each doc.links as link}
                <li>
                  <a href={link.href} class="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 group">
                    <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
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
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </Button>
    </div>
  </div>
</section>
