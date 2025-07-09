<script setup> 
import { useProductsStore } from '../stores/products' 
import {ref} from 'vue' 
 
const productsStore = useProductsStore() 
const products= productsStore.products 
const selectedProduct = products.find(product => product.id == 
productsStore.selectedProduct); 
 
const quantity_model = defineModel('quantity_model') 
let quantity = ref(1) 
function increment(){ 
   quantity.value++ 
} 
function decrement(){ 
   if (quantity.value >0){ 
       quantity.value-- 
   } 
} 
function buy(){ 
   let data = { 
       selectedProduct: selectedProduct, 
       quantity:quantity.value 
   } 
   // To Do --> send to backend 
   console.log(data) 
} 
</script> 
 
<template> 
  <v-container> 
   <v-row> 
       <v-col md="6"> 
           <v-card> 
               <v-img class="align-end text-white" height="500" 
:src="selectedProduct.image" cover ></v-img> 
           </v-card> 
       </v-col> 
       <v-col md="6"> 
           <v-card> 
               <v-card-item> 
                   <v-card-title>{{selectedProduct.name}}</v-card-title> 
                   <v-chip> {{ selectedProduct.brand }} </v-chip> 
                       <v-row> 
                           <v-col md="4"> 
                               <v-rating :model-value="selectedProduct.rating" 
:size="24" readonly ></v-rating> 
                           </v-col> 
                           <v-col md="6"> 
                               <v-btn color="lime-lighten-2" variant="outlined" 
density="compact" readonly> In Stock</v-btn> 
                           </v-col> 
                       </v-row> 
                   <v-card-text> {{selectedProduct.long_description}} </v-card-text> 
                   <v-card-title>{{selectedProduct.price}}</v-card-title> 
               </v-card-item> 
               <v-card-actions>
                <div> 
<v-btn @click="decrement()" variant="outlined" 
color="lime-lighten-2">-</v-btn> 
<span> {{ quantity }} </span> 
<v-btn @click="increment()" variant="outlined" 
color="lime-lighten-2">+</v-btn> 
</div> 
<v-btn elevation="4" color="purple" variant="tonal" 
@click="buy(selectedProduct.id)" > Buy </v-btn> 
</v-card-actions> 
</v-card> 
</v-col> 
</v-row> 
</v-container> 
</template>