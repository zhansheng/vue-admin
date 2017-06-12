<template>
  <li class="nav-item" :class="{ active: isActive, open: isOpen }">
    <a class="nav-link nav-toggle" @click="toggle">
      <i :class="icon"></i>
      <span class="title">{{title}}</span>
      <span class="selected"></span>
      <span class="arrow" :class="isOpen ? 'open' : ''"></span>
    </a>
    <ul class="sub-menu" :class="isOpen ? 'show' : 'hide'">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'NavItem',
    props: ['icon', 'title', 'active', 'navIndex'],
    data: function () {
      return {
        isActive: this.active,
        isOpen: false,
      }
    },
    methods: {
      toggle: function () {
        this.isOpen = !this.isOpen
        if (this.isOpen) {
          this.$emit('itemOpen', this.navIndex)
        }
      }
    },
  }
</script>

<style>

</style>
