import { createApp } from 'vue' 
import { createPinia } from 'pinia' 
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'  
import App from './App.vue' 
import router from './router' 
 
// Vuetify 
import 'vuetify/styles' 
import { createVuetify } from 'vuetify' 
import * as components from 'vuetify/components' 
import * as directives from 'vuetify/directives' 
import '@mdi/font/css/materialdesignicons.css'  
const vuetify = createVuetify({ 
 components, 
 directives, 
 icons: { 
   defaultSet: 'mdi', 
 }, 
}) 
 
const pinia = createPinia() 
pinia.use(piniaPluginPersistedstate)  
const app = createApp(App) 
 
app.use(pinia) // change this line to use pinia created above 
app.use(router)
app.use(vuetify) 
 
app.mount('#app') 
