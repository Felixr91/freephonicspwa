<template>
  <div class="home">
    <h1>Home Page!</h1>
    <AllCategories/>
  </div>
</template>

<script>

import AllCategories from '@/components/AllCategories.vue'

export default {
  name: "Home",
  components: {
    AllCategories
  }
};
</script>
