let errorCodes = {
    404: "Not Found! This is a URL Problem",
    500: "This isn't a me problem",
    403: "This is a You problem, you need permission",
    503: "This is a server problem don't @me"
 
}

async function fetchData(sourceURL) {
     
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`Danger Will Robinson! Error ${response.status}: ${errorCodes[response.status]}`);
        } 
        
        return response;           
    });

   
    let dataset = await resource.json();

    return dataset[0];
    
    //debugger;
}

async function postData(sourceURL) {
   
    return "You are using the postData API endpoint";
}


export { fetchData, postData };