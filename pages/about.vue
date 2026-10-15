<template>
  <article class="page-intro container" itemscope itemtype="https://schema.org/Person">
    <p class="eyebrow">About</p>
    <img class="portrait" src="~/assets/images/headshot.jpg" alt="Portrait of Thomas" itemprop="image">
    <h1 itemprop="description">
      Hey, I’m <span itemprop="name">Thomas</span> — an AI systems builder focused on intelligent experiences and business transformation.
    </h1>
    <div class="prose prose--spaced" itemprop="knowsAbout">
      <p v-for="(paragraph, index) in about.intro" :key="index">{{ paragraph }}</p>
      <p>
        <NuxtLink class="text-link" :to="about.northStar.to">{{ about.northStar.label }}</NuxtLink>
      </p>
    </div>

    <section class="section prose" aria-labelledby="beliefs">
      <h2 id="beliefs">{{ about.beliefsHeading }}</h2>
      <p v-for="(paragraph, index) in about.beliefs" :key="index">{{ paragraph }}</p>
      <p>{{ about.principlesLead }}</p>
      <ul class="principles">
        <li v-for="principle in about.principles" :key="principle.name">
          <strong>{{ principle.name }}</strong> — {{ principle.text }}
        </li>
      </ul>
      <p>{{ about.beliefsClose }}</p>
    </section>

    <section class="section" aria-labelledby="selected-work">
      <div class="section__header">
        <h2 id="selected-work">{{ about.selectedWorkHeading }}</h2>
        <NuxtLink class="text-link" to="/work">View all work</NuxtLink>
      </div>
      <div class="card-grid">
        <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project"/>
      </div>
    </section>

    <section class="section prose" aria-labelledby="interests">
      <h2 id="interests">{{ about.interestsHeading }}</h2>
      <p v-for="(paragraph, index) in about.interests" :key="index">{{ paragraph }}</p>
      <p>
        <a class="button" :href="about.ctaHref">{{ about.cta }}</a>
      </p>
    </section>
  </article>
</template>

<script setup>
import {about} from '~/content/about'
import {featuredProjects} from '~/content/projects'

useSeoMeta({
  title: 'About',
  description: about.intro[0],
})
</script>
