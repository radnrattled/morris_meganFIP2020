import { SendMail } from "./components/mailer.js";
import { fetchData, postData } from "./modules/dataMiner.js";

(() => {
    let mailSubmit = document.querySelector('.submit-wrapper');

    function processMailFailure(result) {
       
        console.table(result); 
        alert(result.message);

       
    }

    function processMailSuccess(result) {
        
        console.table(result); 
        alert(result.message);

       
    }

    function processMail(event) {
       
        event.preventDefault();

        
        SendMail(this.parentNode)
            .then(data => processMailSuccess(data))
            .catch(err => processMailFailure(err));

            
    }

    console.log('loaded');
    
    function popErrorBox(message) {
        alert("Something Dun Goofed");
    }

    function handleDataSet(data) {
        let userSection = document.querySelector('.fave-section'),
            userTemplate = document.querySelector('#fave-template').content;

        for (let user in data) {
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.fave').children;

            currentUserText[1].src = `images/${data[user].avatar}`;
            currentUserText[2].textContent = data[user].name;
            currentUserText[3].textContent = data[user].info;
            currentUserText[4].textContent = data[user].bio;

          
            userSection.appendChild(currentUser);
        }
    }


    mailSubmit.addEventListener("click", processMail);
    fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => { console.log(err); popErrorBox(err); });
})();