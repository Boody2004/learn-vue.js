<template>
  <section>
    <div class="text">
      <h1>{{ pageName }}</h1>
      <p>{{ pageDescription }}</p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPost
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :author="post.author"
              :category="post.category"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sideber">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BlogPost from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import JsonPosts from "@/json/blog/posts.json";
export default {
  name: "Blog",
  data: function () {
    return {
      pageName: "Vue.js",
      pageDescription: "This Is Vue.js Us Page",
      posts: JsonPosts,
    };
  },
  components: {
    BlogPost,
    BlogSidebar,
  },
};
</script>

<style scoped>
p {
  font-size: 30px;
  font-weight: bold;
  color: var(--orange-sherbet);
}
</style>
