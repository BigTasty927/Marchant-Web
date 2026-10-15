<template>
  <footer class="site-footer">
    <p>Thomas Clarke</p>
    <nav aria-label="Footer">
      <ul class="nav-list">
        <li v-for="item in navigation" :key="item.to">
          <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup>
import {navigation} from '~/content/site'
</script>
