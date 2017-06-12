<template>
  <li class="nav-item" :class="active">
    <router-link :to="href" class="nav-link">
      <span class="title">{{title}}</span>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: 'SubMenu',
    props: ['title','href','active'],

  }
</script>

<style>

</style>
