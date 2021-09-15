<template>
    <div class="post-box">
        <span class="post-views">{{ views }}</span>
        <h3 class="post-title">{{ title }}</h3>
        <span class="post-date">{{ date }}</span>
        <p class="post-content">{{ content }}</p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">{{ author }}</span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category">{{ category | uppercase }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Post",
    props: [
        "views",
        "title",
        "date",
        "content",
        "author",
        "category"
    ]
};
</script>

<style lang="scss" scoped>
.post-box {
    padding: 20px;
    margin-bottom: 20px;
    background-color: #FFF;
    box-shadow: 0 0 10px #DDD;
    position: relative;
    text-align: left;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #4CAF50;
        border-radius: 4px;
        padding: 1px 5px;
        color: #FFF;
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
    .post-author,
    .post-category {
        padding: 6px 10px;
        border-radius: 4px;
        color: #FFF;
    }
    .post-author {
        background: #607D88;
    }
    .post-category {
        background: #E91E63;
    }
}
</style>
