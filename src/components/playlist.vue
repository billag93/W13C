<template>
    <div>
        <h1>Playlist</h1>
        <song-choices :song="song" :isSongList="false" v-for="song in songs" :key="song.songtitle"></song-choices>
    </div>
</template>

<script>
import songChoices from "./songs.vue";
export default {
    name: "play-list",
    components: {
        songChoices
    },
     computed:{
        songs: function(){
            return this.$store.state.playList;    
      }
     }
    
}
</script>

<style scoped>

</style>