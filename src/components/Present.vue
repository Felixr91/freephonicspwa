<template>
    <div>
        <h1>Show Slides here</h1>
        <v-card class="mx-auto my-12" max-width="374" v-for="card in cards" v-bind:key="card.id">
        {{card.word}}
        </v-card>
    </div>
</template>

<script>

import db from './firebaseInit'

export default {
  data(){
    return{
      slides: []
    }
  }, 
  created() {
    db.collection('presentations').doc('slides').where('word_part_1', '===', this.$route.params.id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'full_word': doc.data().full_word,
          'word_part_1': doc.data().word_part_1, 
          'word_part_2': doc.data().word_part_2
        }
        this.slides.push(data)
      })
    })
  }
};
</script>