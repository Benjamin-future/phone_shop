import { ref, computed } from 'vue' 
import { defineStore } from 'pinia' 
import axios from 'axios';

 
export const useProductsStore = defineStore('products',  { 
   state: () => { 
       const products = ref([  ]) 
       const selectedProduct = ref(0) 
 
       return{ 
           products, 
           selectedProduct 
       } 
   }, 
   actions:{ 
       updateSelectedProduct (payload) { 
           this.selectedProduct = payload 
       },
       async fetchProducts() {
         const response = await axios.get('http://127.0.0.1:8000/api/getAllProducts')
           this.products = response.data
       }
 
   }, 
   persist: true, 
})