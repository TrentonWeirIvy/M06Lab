<template>
  <v-app>
    <v-toolbar app>

    </v-toolbar>
    
      <MessagesMsg msg="Trenton Weir"/>
    
  </v-app>
</template>

<script>
import MessagesMsg from './components/Messages.vue'

export default {
  name: 'App',
  components: {
    MessagesMsg
  }
}
</script>

<style>
</style>
