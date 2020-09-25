<template>
    <div>
        <h1>{{song.songtitle}}</h1>
        <h2>{{song.artist}}</h2>
        <button @click="removeFromPlaylist" v-if="!isSongList">Remove from playlist</button>
        <button v-else @click="addToPlaylist">Add to playlist</button>
    </div>
</template>

<script>
export default {
    name: "song-choices",

    props:{
        song:{
            type: Object,
            required: true
        },
        isSongList:{
            type:Boolean,
            required: true,
        }
    },
    methods:{
        addToPlaylist: function(){
            this.$store.commit("moveToPlaylist", this.song)
        },
        removeFromPlaylist: function(){
            this.$store.commit("moveToSonglist", this.song)
        }
    }
}
</script>

<style scoped>

</style>