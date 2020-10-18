<template>
  <div class="all-categories">
    <h1>Categories</h1>

    <CardCategory v-for="category in categories" :key="category.id" :category="category" name="name">
      {{ category.name }}
    </CardCategory>
  </div>
</template>

<script>
import CardCategory from '@/components/CardCategory.vue'
import CategoryService from '@/Services/CategoryService.js'

export default {
  components:{
    CardCategory
  },
  props: {
    category: Object
  },
  data(){
    return{
      categories: []
    }
  }, 
  created() {
      CategoryService.getCategories()
      .then(response => {
        console.log(response.data)
        this.categories = response.data // <--- set the events data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
};
</script>
