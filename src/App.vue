<template>
  <div id="nav">
    <!-- the root nav area is here -->
    <router-link to="/">Home</router-link> |
    <!-- need to avoid multiple changes on source code ... see index.js const routes ... About implementation -->
    <router-link :to="{ name: 'About'}" >About</router-link> 
    <router-link :to="{ name: 'Jobs'}" >Jobs</router-link> 
  </div>
  <!-- not here -->
  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home'}) // redirect with push using the defined name 
    }, 
    back() {
      this.$router.go(-1) // go back from history , for -2 will step with 2 pages
    }, 
    forward() {
      this.$router.go(1) // similar go back but use positive number for forward
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: red;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

</style>
