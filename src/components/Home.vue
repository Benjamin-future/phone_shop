<script setup> 
import "leaflet/dist/leaflet.css" 
import * as L from 'leaflet'; 
import { ref, onMounted } from 'vue'; 

 
const initialMap = ref(null); 
 
onMounted(()=> { 
   initialMap.value = L.map('map').setView([-1.2953145569779758, 36.817184449599566], 
10); 
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
       maxZoom: 19,    }).addTo(initialMap.value); 
   L.marker([-1.3073328374609299, 36.81211146039793]).addTo(initialMap.value); 
}); 
 
</script> 
 
<template> 
   <v-container> 
       <v-row> 
           <v-img src="../../public/Image/home1.jpg" height="800px" cover class="bg-grey-lighten-2"> 
              <v-overlay absolute> 
               <p class="text-h2 text-center"> Welcome to The Phone Shop!</p> 
               <p class="text-h4 text-center"> Your one stop online shop for the 
latest phones!</p> 
              </v-overlay > 
           </v-img> 
       </v-row> 
   </v-container> 
 
   <v-container> 
       <v-row> 
           <v-card> 
               <v-card-text class="text-center"> 
                   Welcome to The Phone Shop, your premier destination for all things 
mobile! We're passionate about connecting you with the perfect device to fit your lifestyle and budget. 
               </v-card-text> 
               <v-card-text class="text-center"> 
                   At The Phone Shop, we believe that choosing a new phone should be 
an exciting and straightforward experience. That's why we offer a wide selection of the latest smartphones, from cutting-edge flagships to reliable budget-friendly 
options, alongside a curated collection of high-quality refurbished devices. Every 
phone we sell, whether new or refurbished, undergoes rigorous testing to ensure it 
meets our strict standards for performance and reliability. 
               </v-card-text> 
               <v-card-text class="text-center"> 
                   We're committed to providing exceptional customer service and 
making sure you feel confident in your purchase. Our knowledgeable team is always here
to help you navigate the options, answer your questions, and guide you toward the best
phone for your needs.                </v-card-text> 
           </v-card> 
       </v-row> 
   </v-container> 
 
   <v-container> 
       <v-row> 
           
           <v-col md="12"> 
               <v-card color="pink"> 
                   <div> 
                       <h3>An interactive leaflet map</h3> 
                       <div id="map" style="height:30vh;"></div> 
                   </div> 
               </v-card> 
           </v-col> 
           <v-col md="12"> 
               <v-card color="pink"> 
                   <v-card-text> 
                       Phone: 0712345678 
                   </v-card-text> 
                   <v-card-text> 
                       Email: thephoneshop@example.com 
                   </v-card-text> 
                   <v-card-actions> 
                       <v-btn icon="mdi-twitter" density="comfortable" variant="text" 
></v-btn> 
                       <v-btn icon="mdi-instagram" density="comfortable" 
variant="text" ></v-btn> 
                       <v-btn icon="mdi-instagram" density="comfortable" 
variant="text" ></v-btn> 
                   </v-card-actions> 
               </v-card> 
           </v-col> 
       </v-row> 
   </v-container> 
</template>