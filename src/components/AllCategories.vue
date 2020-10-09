<template>
  <div class="all-categories">
    <h1>Categories</h1>



  </div>
</template>

<script>

export default {
  name: "AllCategories", 
  props: {
    categories: {
      type: Array, 
      required: true
    }
  }
};
</script>
