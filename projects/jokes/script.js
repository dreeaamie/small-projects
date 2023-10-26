const btnn=document.getElementById("btn")
const parachange=document.getElementById("para")
const apikey="pfvJOG+G/RLE1r1ChwLq1A==dWJf5ZmhZpyrRK23"
const options={
    method:"GET",
    headers:{
        'X-Api-Key':apikey,
    },
};

const apiurl= "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJokes(){

try {

    parachange.innerText="updating....";
    btnn.disabled=true;
    btnn.innerText="loading...."
    const response=await fetch(apiurl,options);
    const data=await response.json();

    btnn.disabled=false;
    btnn.innerText="joke again"

    // console.log(data[0].joke)
parachange.innerText=data[0].joke;
    
} catch (error) {
    parachange.innerText="an error happened" 
    console.log(error)
}


   
}
btnn.addEventListener("click",getJokes);
