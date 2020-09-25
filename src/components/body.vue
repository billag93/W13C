<template>
    <div id="layout">
    <song-list :class="{'grid-box':gridBox}"></song-list>
    <play-list :class="{'grid-box':gridBox}"></play-list>
    </div>
</template>

<script>
import playList from "./playlist.vue";
import songList from "./songlist.vue";
export default {
    name: "page-body",
    data: function(){
        return{
            gridBox:true,
        }
    },
    components: {
        playList,
        songList
    }
}
</script>

<style scoped>
#layout{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 5%;
}
.grid-box{
    display: grid;
    align-items: center;
    justify-items: center;
    font-size: 1.2em;
    color: lightskyblue;
    border: 3px solid skyblue;
    border-radius: 10%;
}
</style>