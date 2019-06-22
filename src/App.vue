<template>
  <div id="app">
    <div class="centered">
      <img alt="Vue logo" src="./assets/logo.png">
      <div id="nav">
        <router-link to="/">Задание</router-link>
        |
        <router-link to="/about">Информация</router-link>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .content {
    max-width: 800px;
    margin: auto;
  }

  .md-dialog {
    background: #fff;
  }

  .centered {
    text-align: center;
  }
</style>
