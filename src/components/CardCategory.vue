<template>

  <router-link class="category-link" :to="{ name: 'category', params: { id: category.name } }">
    <v-card
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title><slot></slot></v-card-title>
      
    </v-card>
  </router-link>
</template>


<script>
export default{
    name: 'CardCategory',
    props: {
        category: Object
    }, 
    data(){
      return{
        
      }
    }
}
</script>
