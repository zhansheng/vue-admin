<template>
  <li class="nav-item active open" :class="active">
    <a class="nav-link nav-toggle">
      <i :class="icon"></i>
      <span class="title">{{title}}</span>
      <span class="selected"></span>
      <span class="arrow open"></span>
    </a>
    <ul class="sub-menu">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'NavItem',
    props: ['icon', 'title','active']
  }
</script>

<style>

</style>
