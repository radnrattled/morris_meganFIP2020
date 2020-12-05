
import { fetchData, postData } from "./components/dataMiner.js";

(() => {

    let vue_vm = new Vue({
    

        data: {
            removeAformat: true,
            showBioData: false,
            currentPhotoData: {},

            Gallery: [],
            currentPhotoData: {}
        },

        mounted: function() {
            console.log("Vue is Mounted");
            
            fetchData("./includes/functions.php").then(data => {
            data.forEach(photo => this.Gallery.push(photo));}).catch(err => console.error(err));
        },
    
        updated: function() {
            console.log('Vue just updated the DOM')
        },

        methods: {

          
            removePhoto(target) {
                // remove this prof from the professors array
                console.log('clicked to view Photo bio', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself by default
            
                // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true

                this.currentPhotoData = target;
            }
    }}).$mount("#app"); // also connects Vue to your wrapper in HTML

let infoButtons = document.querySelectorAll(".button")
  lightBox = document.querySelector(".lightbox")
  closeLightbox = lightBox.querySelector(".close")
  Desc = document.querySelector(".photo-info")
    
    function showLightbox() {
        //pop open lightbox and show content
        //debugger
        lightBox.classList.add('show-lightbox');
        Desc.textContent = `${currentPhotoData[this.dataset.offset][1]}`;
      }
      
      function hideLightbox(){
        lightBox.classList.remove('show-lightbox');
      }
      
      
      infoButtons.forEach(button => button.addEventListener("click", showLightbox));
      closeLightbox.addEventListener("click", hideLightbox)
      
    
})();