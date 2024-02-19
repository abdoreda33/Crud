let links=document.getElementById('links');
let userInfo=document.getElementById('user-info');
let userDom=document.getElementById('user');
let logout=document.getElementById("logoutsign")


let username=localStorage.getItem('username');
if(username){
   links.remove()
   userInfo.style.display="flex"
   userDom.innerHTML=username
}



logout.addEventListener('click',function(){
setTimeout(()=>{
   window.location="regiser.html"
  },1000)

  localStorage.clear();

})