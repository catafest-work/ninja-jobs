<template>
  <!-- <h1>Job Details Page</h1> -->
  <h1>{{ job.title }}</h1>
  <p>The job id is {{ id }}</p>
  <p>{{ job.details }}</p>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
    .then((res) => res.json())
    .then( data => this.job = data) // fill the data with the content of json file get from res 
    .catch(err => console.log(err.message)) 
  }
  // data() {
  //   return {
  //     id: this.$route.params.id // set the id from URL params and send to <p>The job id is {{ id }}</p>
  //   }
  // }
}
</script>

<style>

</style>