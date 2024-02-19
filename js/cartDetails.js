let products=JSON.parse(localStorage.getItem('products'))
let productid=localStorage.getItem('productid')
let itemDom=document.querySelector(".item-details")
let productDetails=products.find(item=>item.id==productid)

console.log (productDetails)
itemDom.innerHTML=` 
  <img src="${productDetails.imageUrl}" alt="">
<h2>${productDetails.title}</h2>
<p>size:${productDetails.size}</p><br>
<span>Quantity: ${item.qty}</span>
`