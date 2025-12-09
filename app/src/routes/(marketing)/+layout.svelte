<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  const siteUrl = "https://financialsimulations.com";
</script>

<svelte:head>
  <meta name="robots" content="index, follow" />
  <meta name="author" content="FinSim" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="FinSim" />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:image" content="{siteUrl}/og-image.svg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta
    property="og:image:alt"
    content="FinSim - Your Life Operating System for Financial Freedom"
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="{siteUrl}/og-image.svg" />
  <meta
    name="twitter:image:alt"
    content="FinSim - Your Life Operating System for Financial Freedom"
  />
  <link rel="canonical" href={siteUrl} />
  <script defer src="https://cloud.umami.is/script.js" data-website-id="c11c99d1-dee4-45fc-85c7-11b77dcb088d"></script>
</svelte:head>

<Header />
<main>
  <slot />
</main>
<Footer />
