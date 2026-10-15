<template>
  <article class="page-intro container" itemscope itemtype="https://schema.org/Person">
    <p class="eyebrow">About</p>
    <h1 itemprop="description">{{ about.headline }}</h1>
    <div class="prose prose--spaced" itemprop="knowsAbout">
      <p v-for="(paragraph, index) in about.intro" :key="index">{{ paragraph }}</p>
      <p>
        <NuxtLink class="text-link" :to="about.northStar.to">{{ about.northStar.label }}</NuxtLink>
      </p>
    </div>

    <section class="section" :aria-labelledby="teamsId">
      <h2 :id="teamsId">{{ about.teamsHeading }}</h2>
      <ul class="logo-grid">
        <li v-for="team in about.teams" :key="team.alt">
          <img :src="team.src" :alt="team.alt">
        </li>
      </ul>
    </section>

    <section class="prose" :aria-labelledby="interestsId">
      <h2 :id="interestsId">{{ about.interestsHeading }}</h2>
      <p v-for="(paragraph, index) in about.interests" :key="index">{{ paragraph }}</p>
      <p>
        <NuxtLink class="button" to="/contact">{{ about.cta }}</NuxtLink>
      </p>
    </section>
  </article>
</template>

<script setup>
import {about} from '~/content/about'

const teamsId = 'teams'
const interestsId = 'interests'

useSeoMeta({
  title: 'About',
  description: about.intro[0],
})
</script>
