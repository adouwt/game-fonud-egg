<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    font-size: 14px;
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .pull-left {
    float: left;
  }
  .pull-right {
    float: right;
  }
</style>
