<template>
  <div class="home">
    <h1>Home Page!</h1>
    <AllCategories/>
  </div>
</template>

<script>

import AllCategories from '@/components/AllCategories.vue'

import categorydata from '../data/categories.json'

export default {
  name: "Home",
  components: {
    AllCategories
  }, 
  data(){
    return{
      categories: categorydata
    }
  }
};
</script>
