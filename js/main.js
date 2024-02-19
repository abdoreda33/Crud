


//Define products
let productsDom =document.querySelector(".products")
let cartsproductMenu=document.querySelector(".carts-products")
let cartsproducts=document.querySelector(".carts-products div")
let badgeDom=document.querySelector(".badge")
let shoppingCart=document.querySelector(".shopping-cart")
let products=JSON.parse(localStorage.getItem("products"))
//open cart menu
 shoppingCart.addEventListener('click', opencartMenu)
//Display products
let getProductUI;
getProductUI=function(products=[]){
 
   let productsUI=products.map((item)=>{

return` 
<div class="product-item">
    <img src="${item.imageUrl}" alt="">
    <div class="product-desc">
        <h1 onclick="saveItemData(${item.id})" >${item.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <span>Size: ${item.size}</span>
    </div>
    <div class="product-action">
      <button class="add-to-card" onclick="addtocart(${item.id}),Checkelogeduser()">Add to card</button>
    </div>
</div>
`
   })
   productsDom.innerHTML=productsUI.join('')
}
getProductUI(JSON.parse(localStorage.getItem('products')))
//check if there is item in localstorage
let addItem=[];

//add to cart
let allItems=[];
function addtocart(id){
let choosenItem= products.find((item) => item.id===id)
let item = allItems.find((item) => item.id===choosenItem.id);

if(item){
   choosenItem.qty+=1
}else{
   allItems.push(choosenItem)
}
cartsproducts.innerHTML="";
allItems.forEach((item)=>{
   cartsproducts.innerHTML+=`<p>${item.title}  (${item.qty})</p>`
});


let cartproductItems=document.querySelectorAll(".carts-products div p")

addItem=[...addItem,choosenItem];
let uniqueproducts=getUniquearr(addItem,"id")
localStorage.setItem('productsIncart',JSON.stringify(uniqueproducts))
badgeDom.style.display="block";
badgeDom.innerHTML=cartproductItems.length
}

// if the user login or register
function Checkelogeduser(){
   if(localStorage.getItem('username')){
   }else{
      window.location="regiser.html"
   }
}


function getUniquearr(arr,filtertype){
let unique=arr
.map((item)=>item[filtertype])
.map((item,i,final)=>final.indexOf(item)===i && i)
.filter((item)=>arr[item])
.map((item)=>arr[item]);
return unique
}
//open cart menu
function opencartMenu(){
  if(cartsproducts.innerHTML!=""){
   if(cartsproductMenu.style.display=="block"){

      cartsproductMenu.style.display="none";
   }else{
      cartsproductMenu.style.display="block";
   }
  }
}

  //save Data
  function saveItemData(id){
   localStorage.setItem('productid',id)
   window.location="cartDetails.html";
  }
// search function

let input=document.getElementById('search');

input.addEventListener('keyup',function(e){

   search(e.target.value,JSON.parse(localStorage.getItem('products')))

if(e.target.value.trim()===""){
   getProductUI(JSON.parse(localStorage.getItem('products')))
}
   
})
  function search(title,myArray){

   let arr=myArray.filter(item =>item.title.indexOf(title)!==-1)
   getProductUI(arr)

  };
  