<template>
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

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title><slot></slot></v-card-title>
    
  </v-card>
</template>

<script>
export default{
    name: 'CardCategory',
    props: {
        name: String, 

    }, 
    data(){
      return{
        
      }
    }
}
</script>
