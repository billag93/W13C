import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      songList:[
        {
          songtitle: "Run From Reality",
          artist: "Ran-D"
        },
        {
          songtitle: "Fine Day",
          artist: "Coone"
        },
        {
          songtitle: "Shake The Ground",
          artist: "WildStylez"
        },
        {
          songtitle: "Feel It",
          artist: "D-Block & S-Te-Fan"
        },
        {
          songtitle: "Adrenaline",
          artist: "WildStylez"
        },
        {
          songtitle: "Jackie Chan",
          artist: "Dzecko"
        },
        {
          songtitle: "The Hunter and Prey",
          artist: "Headhunterz"
        },
        {
          songtitle: "WHATS POPPIN",
          artist: "Jack Harlow"
        },
        {
          songtitle: "Laugh Now Cry Later",
          artist: "Headhunterz"
        },
        {
          songtitle: "The SCOTTS",
          artist: "The SCOTTS"
        },
        {
          songtitle: "Toosie Slide",
          artist: "Drake"
        },
        {
          songtitle: "Savage",
          artist: "Megan the Stallion"
        }
      ],

      playList: [],  
  },
  mutations: {
      moveToPlaylist:function(state, addedSongs){
        state.playList.push(addedSongs);
        for(let i = 0; i<state.songList.length; i++){
          if(state.songList[i].songtitle == addedSongs.songtitle){
            state.songList.splice(i, 1)
          }
        }
      },
      moveToSonglist:function(state, removedSongs){
        state.songList.push(removedSongs);
        for(let i = 0; i<state.playList.length; i++){
          if(state.playList[i].songtitle == removedSongs.songtitle){
            state.playList.splice(i, 1)
          }
        }
      }
  },
  actions: {},

  modules: {}
});
