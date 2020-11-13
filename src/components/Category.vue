<template>
    <div>
        <h3> All {{$route.params.id}} presentations</h3>

        <v-card class="mx-auto my-12" max-width="374" v-for="presentation in presentations" v-bind:key="presentation.id">
        
        <router-link v-bind:to="{name:'present', params: {id: presentation.id}}">
            <div>{{presentation.name}} || {{presentation.category}}</div>
        </router-link>
        </v-card>

    </div>
</template>

<script>

import db from './firebaseInit'

export default {
  data(){
    return{
      presentations: []
    }
  }, 
  created() {
    let location = this.$route.params.id
    console.log(location)
    db.collection('presentations').where('category', '===', location).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id':  doc.id,
          'name': doc.data().name, 
          'category': doc.data().category
        }
        this.presentations.push(data)
      })
    })
  }
};
</script>