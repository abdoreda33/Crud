
let productsDom =document.querySelector(".products")
let NoproductsDom=document.querySelector(".noproducts")


function getCartProductUI(allproducts=[]){
 if(JSON.parse(localStorage.getItem("productsIncart")).length===0)
    NoproductsDom.innerHTML="There Is No Products!!";


    let products = JSON.parse(localStorage.getItem("productsIncart"))||allproducts
    let productsUI=products.map((item)=>{
 return` 
 <div class="product-item">
     <img src="${item.imageUrl}" alt="">
     <div class="product-desc">
         <h1>${item.title}</h1>
         <p>Lorem ipsum dolor sit amet consectetur.</p>
         <span>Size: ${item.size}</span><br>
         <span>Quantity: ${item.qty}</span>
     </div>
     <div class="product-action">
       <button class="add-to-card" onclick="removefromcart(${item.id}),Checkelogeduser()">Remove From Cart</button>
        
     </div>
 </div>
 `
    })
    productsDom.innerHTML=productsUI.join("")
 }
 getCartProductUI()

 function removefromcart(id){
    let productsIncart=localStorage.getItem('productsIncart');
    if(productsIncart){
        let items=JSON.parse(productsIncart)
        let filterItems=items.filter((item) =>(item.id!==id));
        localStorage.setItem('productsIncart', JSON.stringify(filterItems))
        getCartProductUI(filterItems);
    }
}