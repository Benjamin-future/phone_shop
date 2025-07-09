<script setup> 
import { RouterLink, RouterView } from 'vue-router'
 import NavBar from './components/NavBar.vue' // import the NavBar
</script> 
<template> 
<v-app> 
  <NavBar/>
<v-main> 
<RouterView />    
</v-main> 
</v-app> 
</template>
