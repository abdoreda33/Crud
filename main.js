//بنادي علي العناصر كلها
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category= document.getElementById('category');
let submit = document.getElementById('submit');


//get total
function getTotal() {
if ( price.value != '' ){
let result = (+price.value + +taxes.value+ +ads.value)- +discount.value;
 
         total.innerHTML=result;
         
        total.style.background='green';
}else{
        total.innerHTML='';
       total.style.background='#a60404';
}
}
//create product

let datapro=[];
//الخطوه ديت علشان عندما اعمل اعاده تحميل تفضل البيانات متسجله وميخدشي مكانها شي اخر
if (localStorage.product!=null){
  datapro= JSON.parse(localStorage.product);
}else{
    datapro=[];
}
submit.onclick=function(){
 let newpro={
  title:title.value,
  price:price.value,
  taxes:taxes.value,
  ads:ads.value,
  discount:discount.value,
  total:total.innerHTML,
  count:count.value,
  category:category.value
 }
//count
if(newpro.count>1){
    for(let i=0;i<newpro.count;i++){
        datapro.push(newpro);
    }    
}else{
    datapro.push(newpro);
}


 //علشان نحفظ الاوبجيكت في المصفوفه
 datapro.push(newpro);
 //علشان نخزن البيانات ومتتمسحشي
 localStorage.setItem('product',  JSON.stringify(datapro))
 console.log(datapro);

clearData();
showData();

}

//clearData
function clearData(){
 title.value = '';
 price.value = '';
 taxes.value = '';
 ads.value = '';
 total.innerHTML = '';
 count.value = '';
 category.value = '';
 discount.value = '';
}


//read

function showData(){
    let table ='';
    for(let i=0;i<datapro.length;i++){
    table +=` <tr>
    <td>${i}</td>
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].title}</td>
    <td>${datapro[i].total}</td>
    <td>${datapro[i].category}</td>
    <td> <button id="update">update</button></td>
    <td> <button onclick="deleteData(${i})" id="delete">delete</button></td>
`}
    document.getElementById('tbody').innerHTML =table;
    let btnDelete = document.getElementById('deleteall')
if(datapro.length>0){
    btnDelete.innerHTML = `<button onclick="deleteall(${datapro.length})"> delete All</button>`
}else{
    btnDelete.innerHTML = '';

}

}
showData()

//delete
function deleteData(i) {
datapro.splice(i, 1);
localStorage.product=JSON.stringify(datapro);
showData()

}
//delete all
function deleteall(){
    localStorage.clear()
    datapro.splice(0)
    showData()
}