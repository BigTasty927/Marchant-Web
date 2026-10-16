<template>
  <div>
    <header class="page-intro container">
      <p class="eyebrow">Work</p>
      <h1>Work</h1>
      <p class="lede">SaveVault has a case study. The other projects are listed until their pages are written.</p>
    </header>
    <section class="section container" aria-label="Projects">
      <div class="card-grid">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
      </div>
    </section>
  </div>
</template>

<script setup>
import {projects} from '~/content/projects'

useSeoMeta({
  title: 'Work',
  description: 'Projects by Thomas Clarke, including the SaveVault case study.',
})
</script>
