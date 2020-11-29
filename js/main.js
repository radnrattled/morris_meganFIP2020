import { SendMail } from "./components/mailer.js";

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

    mailSubmit.addEventListener("click", processMail);
})();