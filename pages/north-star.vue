<template>
  <section class="page">

    <div class="container-xxxl">
      <div class="row mt-0 mt-lg-6">
        <main class="d-flex flex-column">
          <div class="col-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5 mb-4 mb-lg-8">
            <NuxtLink class="back-link mouse-md mt-4 mt-lg-0 mb-5 mb-lg-0 d-block text-end text-md-start" to="/">Back<i
                class="fa-sharp fa-solid fa-arrow-up-right fa-2x ps-3"></i></NuxtLink>
            <CodeTag class="mt-5 mb-5 d-none d-lg-block">north-star</CodeTag>
            <h2 class="my-4">North Star</h2>
            <p>
              As technology makes products, information, software, and now intelligence easier to reproduce, businesses
              will differentiate through experience, trust, personalization, and transformation.
            </p>
            <p>
              I build toward that idea: systems that reduce friction, help organizations operate more intelligently,
              and create experiences that feel specific to the people they serve.
            </p>
            <p>
              The work I want is where AI, automation, software, and business strategy meet — intelligent workflows,
              AI-enabled products, and the infrastructure that connects them — without losing the human experience those
              systems are for.
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
