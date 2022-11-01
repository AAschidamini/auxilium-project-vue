<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  height: 100%;
  width: 100%;
  font-family: "Roboto", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

p {
  margin: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
