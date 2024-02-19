let productsDt=[
    {
       id:1,
       title:'gshock watech',
       size:'large',
       imageUrl:'images/gshock-watch.jpeg',
       qty:1
    },{
 
       id:2,
       title:'Nice watch',
       size:'small',
       imageUrl:'images/pexels-photo-2783873.webp',
       qty:1
    },
    {
       id:3,
       title:'male watch',
       size:'medium',
       imageUrl:'images/male-watch.jpeg',
       qty:1
    },
    {
       id:4,
       title:'rolex watch',
       size:'large',
       imageUrl:'images/rolex-watch.jpeg',
       qty:1
    }
 ]
 localStorage.setItem('products', JSON.stringify(productsDt));