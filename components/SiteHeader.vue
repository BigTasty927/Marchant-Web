<template>
  <header class="site-header">
    <NuxtLink class="site-mark" to="/" aria-label="Thomas Clarke, home">Thomas Clarke</NuxtLink>
    <nav aria-label="Primary">
      <ul class="nav-list">
        <li v-for="item in navigation" :key="item.to">
          <NuxtLink :to="item.to" :aria-current="isCurrent(item.to) ? 'page' : undefined">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import {navigation} from '~/content/site'

const route = useRoute()

const isCurrent = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  if (path === '/thinking') {
    return route.path === '/thinking' || route.path === '/north-star'
  }
  return route.path === path || route.path.startsWith(`${path}/`)
}
</script>
