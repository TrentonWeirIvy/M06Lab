<template>
    <div>
        <h1 class="display-1">Messages {{ msg }}</h1>
    
        <v-list>
            <v-list-tile
                v-for="message in messages"
                :key="message"
                >
            <v-list-tile-content>
                <v-list-tile-title class="display-1" v-text="message"/>
            </v-list-tile-content>
        </v-list-tile>
        </v-list>
        
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'MessagesMsg',
    props: {
      msg: String
    },
    data() {
      return {
        messages: ["Message1", "Message2"]
      };
    },
    async created(){
        this.messages = (await axios.get('http://localhost:3000/messages')).data;
    }
  }
  </script>
  