<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6">
        <main class="d-flex flex-column" itemscope itemtype="https://schema.org/Person">

          <!-- Intro + beliefs -->
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4">
            <NuxtLink class="back-link mouse-md mt-4 mt-lg-0 mb-5 mb-lg-0 d-block text-end text-md-start" to="/">Back<i
                class="fa-sharp fa-solid fa-arrow-up-right fa-2x ps-3"></i></NuxtLink>
            <CodeTag class="mt-5 mb-5 d-none d-lg-block">about</CodeTag>

            <div class="d-flex flex-row align-items-center mb-5">
              <img src="~assets/images/headshot.jpg" alt="Portrait of Thomas" class="headshot me-4 me-lg-5" itemprop="image">
            </div>

            <h2 class="my-4" itemprop="description">
              Hey, I’m <span itemprop="name">Thomas</span> — an AI systems builder focused on intelligent experiences and business transformation.
            </h2>

            <div itemprop="knowsAbout">
              <p>
                I’m interested in the intersection of AI, automation, software, business strategy, and experience design.
                I build systems that help organizations reduce friction, operate more intelligently, and create more personalized,
                meaningful experiences for the people they serve.
              </p>
              <p>
                My background is in Business &amp; Management, but my work has increasingly moved into the technical systems
                behind modern businesses — automation, APIs, AI agents, databases, applications, and the infrastructure
                that connects them.
              </p>
              <p>
                What ties it all together is a belief I’ve carried for years: as technology makes products, information,
                software, and now intelligence easier to reproduce, businesses will increasingly differentiate through
                experience, trust, personalization, and transformation.
              </p>
              <p class="mb-0">
                <NuxtLink to="/north-star" class="mouse-sm">Read my North Star ➤</NuxtLink>
              </p>
            </div>

            <h3 class="mt-5 mb-4">What I believe in</h3>
            <p>
              AI is not valuable simply because it can automate more work. Its greater potential is helping businesses
              understand people better, reduce unnecessary friction, personalize intelligently, and help customers and
              employees achieve better outcomes.
            </p>
            <p>The strongest intelligent systems create value through three principles:</p>
            <ul class="principles">
              <li><strong>Clarity</strong> — remove complexity and friction.</li>
              <li><strong>Connection</strong> — understand context, preferences, and relationships.</li>
              <li><strong>Control</strong> — preserve human agency, visibility, and judgment.</li>
            </ul>
            <p>AI itself is not the differentiator. What a business enables with it is.</p>

            <h3 class="mt-5 mb-3">Selected work</h3>
          </div>

          <!-- Logos: only list organizations you've actually worked with -->
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxxl-6">
            <div class="client-logo__container">
              <!--
              <img src="~/assets/images/clients/your-client.svg" alt="Client name logo" class="client-logo mouse-md">
              -->
            </div>
          </div>

          <!-- Interests + CTA -->
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4 mb-lg-8">
            <h3 class="mt-5 mb-4">What I'm interested in</h3>
            <p>
              I’m especially interested in opportunities where AI, automation, software, and business strategy intersect
              — whether that means designing intelligent workflows, building AI-enabled products, improving customer experiences,
              or helping organizations rethink how work gets done.
            </p>
            <p class="mb-5">
              I’m continuing to build at the intersection of AI systems and business transformation, and I’m always interested in
              collaborating with founders, teams, and organizations exploring what that future should look like.
            </p>
            <ActionButton href="mailto:tclarke9271@gmail.com" target="_blank" class="mb-6">
              <i class="fa-sharp fa-light fa-paper-plane"></i>
              Let's build something ->
            </ActionButton>
          </div>

        </main>
      </div>
    </div>

  </section>
</template>

<script setup>

useHead({
  title: 'About Thomas — AI Systems Builder',
  meta: [
    {
      name: 'description',
      content: 'Thomas builds AI, automation, and software systems that help businesses reduce friction and create more personal, intelligent experiences.'
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

.principles {
  padding-left: 1.25rem;
  margin-bottom: 1rem;

  li {
    margin-bottom: 0.5rem;
  }
}

.client-logo__container {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  &:hover {
    .client-logo:not(:hover) {
      opacity: 0.5;
    }
  }
}

.client-logo {
  width: 100%;
  opacity: 1;
  transition: opacity 0.3s ease;
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

.headshot {
  width: 80px;
  border-radius: 50%;

  @media screen and (max-width: 992px) {
    width: 70px;
  }
}

</style>
