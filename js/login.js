let username=document.getElementById('username');
let password=document.getElementById('password');
let btnlogin=document.getElementById('btn-sign');

let getUser=localStorage.getItem('username');
let getPassword=localStorage.getItem('password');


btnlogin.addEventListener('click', function(e){
    e.preventDefault();
    if(username.value===""|| password.value===""){
   alert('Please fill data');
    }else{
      if(getUser&&
        getPassword
        )
        {
            setTimeout(()=>{
                window.location="index.html"
               },1000)
      }
      else{
        alert('your password or username is uncorrect')
      }


      
        
    }
})