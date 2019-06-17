<template>
  <v-layout row>
    <v-flex md6 color="purple">
      <button @click="AlertToggle">Click</button>
    </v-flex>
    <v-flex md6>...</v-flex>
  </v-layout>
  <!-- <v-container>
    <v-layout text-xs-center wrap>
        <v-flex xs12 sm6 offset-sm3>
          <v-card v-for="(p,index) in posts" :key="index">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">ชื่อ : {{ p.text }}</h3>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>-->
  <!-- <div class="container">
    <h1>รายการทั้งหมด</h1>
    
  </div>-->
</template>

<script>
import PostService from "../service/PostService";

export default {
  data() {
    return {
      msg: "ทดสอบ",
      posts: [],
      error: "",
      text: ""
    };
  },
  mounted() {
    PostService.getPosts().then(res => {
      this.posts = res;
    });
  },
  methods: {
    AlertToggle() {
      this.$swal("Good job!", "You clicked the button!", "success");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
