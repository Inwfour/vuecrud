<template>
  <v-app>
    <v-container>
      <PostComponent/>
    </v-container>
  </v-app>
</template>

<script>
import PostComponent from './components/PostComponent'

export default {
  components: {
    PostComponent
  },
  data () {
    return {
      //
    }
  }
}
</script>
