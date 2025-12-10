<script lang="ts">
  import { Button } from "$lib/components/ui";
  import { Github } from "lucide-svelte";
</script>

<section
  class="section-padding bg-gradient-to-br from-primary-600 to-primary-700"
>
  <div class="container-custom">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Take Control of Your Financial Future?
      </h2>
      <p class="text-xl text-primary-100 mb-10">
        Join the community of financially-savvy individuals using FinSim to plan
        smarter and achieve financial freedom.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          href="https://github.com/preamza02/finsim"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white hover:bg-gray-100 text-primary-600 font-semibold"
        >
          <Github class="w-5 h-5 mr-2" />
          Start on GitHub
        </Button>
        <Button 
          href="/#pricing"
          class="bg-primary-500 hover:bg-primary-400 text-white font-semibold"
        >
          View Pricing
        </Button>
      </div>
    </div>
  </div>
</section>
