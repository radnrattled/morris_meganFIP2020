
import { fetchData, postData } from "./components/dataMiner.js";

(() => {

    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

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
    
    
    
})();