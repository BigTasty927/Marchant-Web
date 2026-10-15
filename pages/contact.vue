<template>
  <section class="page-intro container">
    <p class="eyebrow">Contact</p>
    <h1>Contact</h1>
    <p class="lede">Email, GitHub, and LinkedIn are not published here yet.</p>
    <ul class="contact-list">
      <li v-for="channel in contactChannels" :key="channel.label">
        <span>{{ channel.label }}</span>
        <a v-if="channel.href" :href="channel.href">{{ channel.label }}</a>
        <span v-else class="todo">TODO</span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import {contactChannels} from '~/content/site'

useSeoMeta({
  title: 'Contact',
  description: 'Contact Thomas Clarke. Email, GitHub, and LinkedIn are not published yet.',
})
</script>
