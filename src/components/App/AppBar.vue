<template>
    <!-- <div class="app-bar">
        <div class="container">
            <div class="logo"><a href="/">LOGO</a></div>
            <ul class="text-right">
                <router-link to="/" tag="li" exact>
                    <a>Home</a>
                </router-link>
                <router-link to="/blog " tag="li">
                    <a>Blog</a>
                </router-link>
                <router-link to="/about" tag="li">
                    <a>About</a>
                </router-link>
                <router-link to="/help" tag="li">
                    <a>Help</a>
                </router-link>
            </ul>
        </div>
    </div> -->
        <section class="app-bar container">
            <a href="/" class="logo"> <img src="https://img.icons8.com/ios/32/000000/logo.png"/>  Logo </a>
            <nav class="navbar">
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
                <a href="/help">Help</a>
            </nav>
        </section>   
</template>

<script>
export default {
    name: 'AppBar',
}
</script>

<style scoped>
* {
    text-decoration: none;
}
.app-bar {
    position: fixed;
    top: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    width: 100%;
    background: rgb(255, 255, 255, .1);
    border: .1rem solid rgb(255, 255, 255, .1);
    border-top:  .1rem solid rgb(255, 255, 255, .3);
    border-left:  .1rem solid rgb(255, 255, 255, .3);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 .5rem 1rem rgb(0, 0, 0, .1);
    padding: 0.8rem;
    border-radius: .5rem;
}
.logo {
    font-size: 2rem;
    font-weight: bolder;
    color: black;
    text-transform: uppercase;
}
.app-bar .navbar a {
    font-size: 1.7rem;
    margin-left: 2rem;
    color: black;
}
.app-bar .navbar a:hover {
    transition: 0.7s ease;
    color: orange;
} 

/* .app-bar {
    background-color: #333;
    color: #fff;
    overflow: hidden;
     .logo a{
        font-size: 24px;
        padding: 20px;
        float: left;
        width: 200px;
        color: #fff;
        text-decoration: none;
     }
     ul {
        margin: 0;
        float: left;
        width: calc(100% - 200px);
         li {
            padding: 20px;
            font-size: 18px;
            display: inline-block;
             a {
                color: #fff;
                text-decoration: none;
             }
         }
     }
} */
</style>
