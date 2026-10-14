<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6">
        <main class="d-flex flex-column">
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4 mb-lg-8">
            <NuxtLink class="back-link mouse-md mt-4 mt-lg-0 mb-5 mb-lg-0 d-block text-end text-md-start" to="/">Back<i
                class="fa-sharp fa-solid fa-arrow-up-right fa-2x ps-3"></i></NuxtLink>
            <CodeTag class="mt-5 mb-5 d-none d-lg-block">north-star</CodeTag>
            <h2 class="my-4">North Star — Intelligent Experience & Business Transformation</h2>
            <p>
             Human progress has repeatedly transformed scarcity into abundance. In agrarian economies, value was 
              concentrated in land, raw materials, and manual labor. Industrialization shifted economic activity toward mechanized 
              production, factories, manufacturing, and scale, making physical goods dramatically easier and cheaper to produce. The 
              rise of services moved value increasingly toward expertise, convenience, and human capability. Computers, software,
              telecommunications, and eventually the internet then created an information and knowledge economy in which access to 
              information, communication, and distribution became faster, cheaper, and increasingly universal.
            </p>
            <p>
             Today, another transition is underway. Artificial intelligence, automation, and autonomous systems are beginning
              to make intelligence and digital labor more abundant. Tasks that once required substantial time, specialized skill, or human 
              effort—research, content creation, analysis, software development, customer support, personalization, and administrative 
              work—can increasingly be performed or augmented by intelligent systems. Just as industrialization commoditized production and 
              the internet commoditized access to information and distribution, AI is reducing the scarcity of many cognitive and 
              digital capabilities.
            </p>
            <p>
              This abundance creates a new competitive challenge. As markets become increasingly crowded and baseline capabilities 
              become easier to reproduce, traditional forms of differentiation become less durable. Consumers can discover, compare, 
              purchase, and switch among countless alternatives with little friction. Price and quality will remain important, but when
              many businesses can offer comparable products, services, convenience, and increasingly comparable technological capabilities,
              functional competence alone becomes less capable of sustaining preference and loyalty.
            </p>
            <p>
              Competitive value therefore migrates upward—from merely what a business provides toward how customers experience that business 
              and what outcomes the relationship creates for them. This is the opportunity of the Experience Economy: businesses differentiate 
              through experiences that are personalized, seamless, contextual, trustworthy, memorable, and increasingly proactive. Intelligent
              systems can allow an organization to understand customers continuously, remember preferences, reduce unnecessary friction, 
              coordinate experiences across channels, anticipate needs, and combine automation with human judgment at the right moments.
              </p>
            <p>
              The highest expression of this progression is transformation. A memorable experience creates satisfaction; transformation 
              creates a measurable improvement in someone's life or business. Customers increasingly value organizations not merely for 
              providing products or completing transactions, but for how effectively those organizations help them accomplish meaningful 
              outcomes.
              </p>
            <p>
              For businesses, adapting to this economy therefore requires more than adopting AI tools or automating isolated tasks. 
              It requires redesigning how the organization operates and how value is delivered—connecting customer data, software, 
              artificial intelligence, automation, human expertise, and thoughtful experience design into systems that continuously improve
              the customer's journey and the organization's ability to serve them.
              </p>
            <p>
              My career exists at this intersection. I want to understand, design, and build the intelligent systems that enable these transformations.
              I do not aspire merely to sell AI or automation. I want to help organizations operate and compete in an AI-enabled economy by using technology
              to create better experiences, stronger relationships, more intelligent operations, and measurable outcomes for the people they serve.
              </p>
          </div>
        </main>
      </div>
    </div>

  </section>
</template>

<script setup>

useHead({
  title: 'North Star | Marchant Web',
  meta: [
    {
      name: 'description',
      content: 'The north star behind Thomas Clarke\'s work at the intersection of AI systems and business transformation.'
    }
  ],
  bodyAttrs: {
    class: 'enable-scroll fixed-webgl'
  }
});

</script>

<style lang="scss" scoped>

.page-enter-active {
  transition: all 1.4s ease;
  transition-delay: 1.7s;
}

.page-leave-active {
  transition: all 1s;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}

.back-link {
  color: #212A36;
  position: fixed;
  top: 40px;
  right: 60px;

  @media screen and (max-width: 992px) {
    position: relative;
    top: 0;
    left: 0;
  }
}

</style>
