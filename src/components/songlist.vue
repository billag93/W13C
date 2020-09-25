<template>
    <div>
        <h1>Songlist</h1>
        <song-choices :song="song" :isSongList="true" v-for="song in songs" :key="song.songtitle"></song-choices>
    </div>
</template>

<script>
import songChoices from "./songs.vue";
export default {
    name: "song-list",

    components:{
        songChoices
    },
    method:{

    },
    computed:{
        songs: function(){
            return this.$store.state.songList;
            
        }
    }
}
</script>

<style scoped>

</style>