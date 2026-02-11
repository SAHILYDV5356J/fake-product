const loader= document.querySelector("#loader");
const cards= document.querySelector(".cards");
const submit= document.querySelector("#submitbutton");
const feedback=document.querySelector("#feedback");
const searchicon=document.querySelector("#searchiconformobile");
const phonesearch= document.querySelector("#phonesearch");
const closesearch=document.querySelector("#closesearch");
const input=document.querySelector("#input");
const clear=document.querySelector("#clear");


searchicon.addEventListener("click",function(){

    phonesearch.style.marginTop="5rem";
    cards.style.marginTop="8rem";
    phonesearch.style.zIndex="0"

});

closesearch.addEventListener("click",function(){
    phonesearch.style.marginTop="0";
    cards.style.marginTop="4rem";
    phonesearch.style.zIndex=-2;


})

clear.addEventListener("click",function(){
    input.value="";
   
})


submit.addEventListener("click", function(event){
    // event.preventDefault();
    feedback.value="";
    alert("your feedback is submited");
    

})
async function makedivs(){

    try{
    const data= await fetch("https://fakestoreapi.com/products");

    if(!data.ok){
        throw new Error("API FAiled");

    }
    else{
        loader.style.display="none";
    }

    var value= await data.json();

    
    // console.log(value);

    

    value.forEach((newcard)=> {


        let randomstar=Math.floor(Math.random() * (5 - 3 +1)) + 3

        const card= document.createElement("div");
        card.setAttribute("class","card");
         
        // console.log(newcard.image)
        card.innerHTML= ` <p id="title">${newcard.title.slice(0,25)}</p>
        <div class="image">
        <img src="${newcard.image}" alt=""   ></img>
        </div> 

       
        <p id="description">${newcard.description.slice(0,50)}....</p>

        <p id="price">${Math.floor((newcard.price)*89)} ₹ 
           <span><i class="fa-solid fa-star" style="color: #00e09d;"></i>${randomstar}</span>
        </p>
        
        `




        cards.appendChild(card)



        
    });


}catch(err){

    console.log(err.message);
    loader.innerText="NO DATA FOUND"
    loader.style.color="red";

}
    
}
makedivs();
makedivs();

