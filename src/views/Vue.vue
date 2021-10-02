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
        <div class="col-md-4 text-center">
          <div class="sideber">
            <BlogSidebar />
            <div class="ten">
              <a href="https://github.com/Boody2004/10-10" target="_blank"
                >10-10</a
              >
            </div>
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
.ten {
  margin-top: 15%;
  text-align: center;
  background: linear-gradient(
    -45deg,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab,
    #be1ed3
  );
  background-size: 300% 300%;
  position: relative;
  animation: change 5s ease infinite;
}
@keyframes change {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
a {
  color: black;
  font-size: 100px;
  font-weight: bold;
}
p {
  font-size: 30px;
  font-weight: bold;
  color: var(--orange-sherbet);
}
</style>
