<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <div>
          <v-btn block round @click="add" color="success">Add Post</v-btn>
        </div>
      </v-flex>
      <v-flex xs4 v-for="(p,index) in posts" :key="index">
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">ชื่อ : {{ p.text }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-list-tile class="grow">
              <v-list-tile-content>
                <v-list-tile-title>
                  <v-btn flat color="danger" @click="remove(p._id)">ลบ</v-btn>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
    this.getPosts();
  },
  methods: {
    getPosts() {
      PostService.getPosts().then(res => {
        this.posts = res;
      });
    },
    add() {
      this.$swal({
        title: "Add Posts",
        input: "text",
        inputPlaceholder: "Your post here",
        cancelButtonText: 'No, Keep it!',
        showCancelButton: true,
      }).then(value => {
        PostService.addPost(value.value).then(res => {
          if (res && value.value) {
            this.getPosts();
            this.$swal("Add Success", "Clice close", "success");
          } else {
            this.$swal("Not Add Success", "Clice close", "error");
          }
        });
      });
    },
    remove(id) {
      PostService.deletePost(id).then(res => {
        if (res) {
          this.getPosts();
          this.$swal("Delete Success", "Clice close", "success");
        } else {
          this.$swal("Not Delete Success", "Clice close", "success");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
