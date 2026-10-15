<template>
  <article class="page-intro container prose">
    <p class="eyebrow">Thinking</p>
    <h1>{{ northStar.title }}</h1>
    <p v-for="(paragraph, index) in northStar.paragraphs" :key="index">{{ paragraph }}</p>
  </article>
</template>

<script setup>
import {northStar} from '~/content/north-star'

useSeoMeta({
  title: northStar.title,
  description: northStar.paragraphs[0],
})
</script>
