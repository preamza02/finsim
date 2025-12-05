<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import Features from "$lib/components/Features.svelte";
  import Docs from "$lib/components/Docs.svelte";
  import Pricing from "$lib/components/Pricing.svelte";
  import FAQ from "$lib/components/FAQ.svelte";
  import CTA from "$lib/components/CTA.svelte";
</script>

<svelte:head>
  <title>FinSim - Your Life Operating System for Financial Freedom</title>
  <meta
    name="description"
    content="FinSim is an open-source financial planning tool. Design your wealthy life for the next 30 years with Thai-specific features. Open Source model with Day Pass pricing."
  />
  <meta
    property="og:title"
    content="FinSim - Your Life Operating System for Financial Freedom"
  />
  <meta
    property="og:description"
    content="Design your wealthy life for the next 30 years. Open source, privacy-first financial planning."
  />
  <meta
    name="twitter:title"
    content="FinSim - Your Life Operating System for Financial Freedom"
  />
  <meta
    name="twitter:description"
    content="Design your wealthy life for the next 30 years. Open source, privacy-first financial planning."
  />
</svelte:head>

<Hero />
<Features />
<Docs />
<Pricing />
<FAQ />
<CTA />
