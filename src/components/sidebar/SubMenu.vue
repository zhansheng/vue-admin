<template>
  <li class="nav-item">
    <router-link :to="href" class="nav-link">
      <span class="title">{{title}}</span>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: 'SubMenu',
    props: ['title','href']
  }
</script>

<style>

</style>
