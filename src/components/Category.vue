<template>
    <div>
        <h3> View all Decks in Category </h3>
    </div>
</template>

<script>

import db from './firebaseInit'

export default {
    created(){
        
        let urlPath = window.location.pathname
        let urlPathArray = urlPath.split('/')
        let urlPath1 = urlPathArray[2]

        console.log(urlPath1)
    }
}
</script>