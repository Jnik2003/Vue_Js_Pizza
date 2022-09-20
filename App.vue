<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app, .main {
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

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container{
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
}
body, html{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
button{
  border: none;
  cursor: pointer;
}
.btn-select{
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  height: 40px;
  border-radius: 9999px;
  background-color: antiquewhite;
  color: darkorange;
  font-size: 18px;
  cursor: pointer;
  transition: .3s;
}
.btn-select:hover{
  background-color: rgb(255, 210, 179);
}
label{
  cursor: pointer;
}
</style>
