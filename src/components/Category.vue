<template>
    <div>
        <h3> View all Decks in {{$route.params.id}} </h3>

        <v-card class="mx-auto my-12" max-width="374" v-for="deck in decks" v-bind:key="deck.id">
        
        <router-link v-bind:to="{name:'present', params: {id: deck.name}}">
            <div>{{deck.name}}</div>
        </router-link>
        </v-card>

    </div>
</template>

<script>

import db from './firebaseInit'


export default {
  data(){
    return{
      decks: []
    }
  }, 
  created() {
    db.collection('decks').orderBy('name').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.data())
        const data = {
          'id':  doc.id,
          'name': doc.data().name
        }
        this.decks.push(data)
      })
    })
  }
};
</script>