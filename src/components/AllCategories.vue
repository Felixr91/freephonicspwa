<template>
  <div class="all-categories">
    <h1>Categories</h1>

    <v-card class="mx-auto my-12" max-width="374" v-for="category in categories" v-bind:key="category.id">
      
      <router-link v-bind:to="{name:'category', params: {id: category.name}}">
        <div>{{category.name}}</div>
      </router-link>
    </v-card>

    
  </div>
</template>

<script>

import db from './firebaseInit'


export default {
  data(){
    return{
      categories: []
    }
  }, 
  created() {
    db.collection('categories').orderBy('name').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id':  doc.id,
          'category_id': doc.data().category_id, 
          'name': doc.data().name
        }
        this.categories.push(data)
      })
    })
  }
};
</script>
