import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Samsung Galaxy A16",
        price: "26,500",
        short_description: "Add Your Description",
        long_description: "Add Long Your Description",
        quantity: "12",
        image:"../../Image/home2.jpg",
        brand: "Samsung",
        rating: 4.5
      },
      {
        id: 2,
        name: "Samsung Galaxy S25",
        price: "83,000",
        short_description: "Add Your Description",
        long_description: "Add Long Your Description",
        quantity: "5",
        image: "../../public/Image/home2.jpg",
        brand: "Samsung",
        rating: 5
      }
    ],
    selectedProduct: 0,
  }),
  getters: {
    // Returns the product object matching selectedProduct id
    selectedProductObject(state) {
      return state.products.find(p => p.id === state.selectedProduct) || null
    },

    // Example: total quantity of all products
    totalQuantity(state) {
      return state.products.reduce((sum, p) => sum + Number(p.quantity), 0)
    }
  },
  actions: {
    updateSelectedProduct(payload) {
      this.selectedProduct = payload
    }
  },
  persist: true,
})
