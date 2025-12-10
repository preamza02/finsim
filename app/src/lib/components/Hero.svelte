<script lang="ts">
  import { Button, Badge } from "$lib/components/ui";
  import { CheckCircle2, ClipboardList, Play, Github, Lock, Cloud } from "lucide-svelte";
</script>

<section
  class="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-50 to-white"
>
  <div class="container-custom">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Badges -->
      <Badge class="bg-orange-50 text-orange-700 mb-3" variant="outline">
        <CheckCircle2 class="w-4 h-4 mr-2" />
        This Project still Under Development Process
      </Badge>
      <br />
      <Badge class="bg-primary-50 text-primary-700 mb-6" variant="outline">
        <CheckCircle2 class="w-4 h-4 mr-2" />
        Open Source & Free to Self-Host
      </Badge>

      <!-- Headline -->
      <h1
        class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
      >
        Your Life Operating System for
        <span class="text-primary-600">Financial Freedom</span>
      </h1>

      <!-- Subheadline -->
      <p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        FinSim is an open-source financial planning tool. Design your wealthy
        life for the next 30 years—not just pay less taxes today.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          href="/wizard/intro"
          class="bg-primary-600 hover:bg-primary-700 text-white"
        >
          <ClipboardList class="w-5 h-5 mr-2" />
          Start Planning
        </Button>
        <Button href="/sandbox" variant="outline">
          Try Demo
          <Play class="w-4 h-4 ml-2" />
        </Button>
      </div>

      <!-- Social Proof -->
      <div
        class="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-500"
      >
        <div class="flex items-center gap-2">
          <Github class="w-5 h-5" />
          <span>Open Source</span>
        </div>
        <div class="flex items-center gap-2">
          <Lock class="w-5 h-5" />
          <span>Privacy First</span>
        </div>
        <div class="flex items-center gap-2">
          <Cloud class="w-5 h-5" />
          <span>Self-Hosted</span>
        </div>
      </div>
    </div>
  </div>
</section>
