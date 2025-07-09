import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue' 
import Products from '../components/Products.vue' 
import ProductDetails from '../components/ProductDetails.vue' 
 
const router = createRouter({ 
 history: createWebHistory(import.meta.env.BASE_URL), 
 routes: [ 
   { 
     path: '/', 
     name: 'home',      component: Home, 
   }, 
   { 
     path: '/products', 
     name: 'products', 
     component: Products,    }, 
   { 
     path: '/product_details', 
     name: 'product_details', 
     component: ProductDetails,    }, 
 ], 
}) 
 
export default router 
