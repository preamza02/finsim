<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <meta name="robots" content="index, follow" />
  <meta name="author" content="FinSim" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="FinSim" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />
<main>
  <slot />
</main>
<Footer />
