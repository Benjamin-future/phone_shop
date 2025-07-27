<script setup> 
import {ref, onMounted} from 'vue' 
import { useProductsStore } from '../stores/products' 
import { useRouter } from 'vue-router'

 
const router = useRouter() 
const productsStore = useProductsStore() 
const products= productsStore.products 

onMounted(() => { 
   productsStore.fetchProducts() // Fetch products when the component is mounted 
});
 
function view(productId){
     productsStore.updateSelectedProduct(productId) // keep track of the course selected 
   router.push('/product_details') 
} 
 
</script> 
 
<template> 
   <v-container> 
       <v-row> 
               <p class="text-h3 text-right"> The Phone Shop Products</p> 
       </v-row> 
   </v-container> 
   <v-container> 
       <v-row> 
           <v-col md="4" v-for="item in products" :key="item"> 
               <v-card color = "pink"> 
               <v-card-item> 
                   <v-img class="align-end text-white" height="300" :src="item.image" 
cover ></v-img> 
                   <v-card-title>{{item.name}}</v-card-title> 
                   <v-card-subtitle>{{item.price}}</v-card-subtitle> 
                   <v-card-text> {{item.description}} </v-card-text> 
                   <v-card-text class="text-caption"> 
                       <v-chip> {{ item.brand }} </v-chip> 
                      {{item.quantity}} remaining 
                   </v-card-text> 
               </v-card-item> 
               <v-card-actions> 
                   <v-btn elevation="4" @click="view(item.id)" block> View </v-btn> 
               </v-card-actions> 
           </v-card> 
           </v-col> 
       </v-row> 
   </v-container> 
</template>