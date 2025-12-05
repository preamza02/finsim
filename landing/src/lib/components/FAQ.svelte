<script lang="ts">
  const faqs = [
    {
      question: 'What is the Day Pass?',
      answer: 'A Day Pass gives you 24 hours of full Pro access. It\'s perfect for monthly financial planning sessions—pay only when you need it.',
    },
    {
      question: 'What happens if I have Day Pass credits and want to subscribe?',
      answer: 'Great question! If you have unused Day Pass credits and convert to a subscription, your subscription will start after your existing Day Pass credits expire. For example, if you have 2 Day Passes remaining, your subscription billing will begin after those 48 hours.',
    },
    {
      question: 'Why different pricing for Thailand vs Global?',
      answer: 'We use Purchasing Power Parity (PPP) pricing. Thai pricing uses PromptPay with minimal fees (~0.5%), while global pricing uses Stripe with higher fees. This lets us offer affordable pricing locally while sustaining development.',
    },
    {
      question: 'Is the open source version limited?',
      answer: 'No! The self-hosted open source version is full-featured. The cloud service adds convenience—we handle hosting, updates, and provide priority support.',
    },
    {
      question: 'Can I switch between Day Pass and subscription?',
      answer: 'Absolutely. Start with Day Passes to try the service. When you\'re ready for more frequent use, switch to monthly or yearly. Your remaining Day Pass credits will be honored.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'In Thailand: PromptPay QR (instant, low fees). Globally: Credit/debit cards via Stripe. We\'re adding more options soon.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! New users get a 7-day Pro trial—no credit card required. After that, choose to self-host for free or pick a paid plan.',
    },
    {
      question: 'How is FinSim different from iTAX or ProjectionLab?',
      answer: 'iTAX is reactive (pay less tax today). ProjectionLab is great but lacks Thai context. FinSim is proactive—design your wealthy life for the next 30 years with Thai-specific features (Pension, GPF, Gold, Condo scenarios).',
    },
  ];

  let openIndex: number | null = null;

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="faq" class="section-padding bg-gray-50">
  <div class="container-custom">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Everything you need to know about pricing and features.
      </p>
    </div>

    <div class="max-w-3xl mx-auto">
      {#each faqs as faq, index}
        <div class="border-b border-gray-200">
          <button
            class="w-full py-6 flex items-center justify-between text-left"
            on:click={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span class="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
            <svg 
              class="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 {openIndex === index ? 'rotate-180' : ''}" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {#if openIndex === index}
            <div class="pb-6">
              <p class="text-gray-600">{faq.answer}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
