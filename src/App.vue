<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/">
        <v-img src="./assets/img/Orange Minimalist Travel App Business Logo(1).png" alt="" max-width="200"></v-img>
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
  }
}
.main-nav {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
