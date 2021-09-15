<template>
  <div class="post-box">
    <span class="post-views">{{ views }}</span>
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">{{ content }}</p>
    <div class="past-btn">
      <span class="post-author">{{ author }}</span>
      <span class="post-category">{{ category | uppercase }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["views", "title", "date", "content", "author", "category"],
};
</script>

<style lang="scss" scoped>
.post-box {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  border-radius: 0.3rem;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #4caf50;
    border-radius: 4px;
    padding: 1px 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .post-date {
    display: block;
    padding: 0 0 5px;
    color: #888;
    font-size: 14px;
  }
  .post-content {
    line-height: 1.8;
    color: #666;
  }
  .past-btn {
    display: flex;
    justify-content: space-between;
  }
  .post-author,
  .post-category {
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
  .post-author {
    background: #607d88;
  }
  .post-category {
    background: #e91e63;
  }
}
</style>
