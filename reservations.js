//vehicles

var motorcycle= 10
var citadine=12
var compact=14
var sedan=20
var suv=16
var heavy=900
var truck=250





document.querySelector("body > div.reservation > button").addEventListener('click',()=>{
    
   
   let vehicle =document.querySelector("#vehicle").value ;
   let feul= document.querySelector("#feul").value ;
   let transmission =document.querySelector("#transmission").value ;
   let day =document.querySelector("#price").value;
   let price ;

   if(vehicle == 'motorcycle'){
       if(feul == 'essence'){
           price = (motorcycle*14/100)+motorcycle;
           console.log(price);
       }
       if(feul == 'electric'){
           price = (motorcycle*5/100)+motorcycle;
       }

   }

   if(vehicle == 'citadine'){
       if(feul == 'electric'){
           price = (citadine*5/100)+citadine
           console.log(price);
       }
       if(feul == 'hybrid'){
           price = (citadine*9/100)+citadine
           console.log(price);
       }
       if(feul == 'essence'){
           price = (citadine*14/100)+citadine
           console.log(price);
       }
       if(feul == 'diesel'){
           price = (citadine*21/100)+citadine
           console.log(price);
       }
       

   }

   if(vehicle=='compact'){
       if(feul=='hybrid'){
           price = (compact*9/100)+compact
           console.log(price);
       }
       if(feul=='essence'){
           price = (compact*14/100)+compact
           console.log(price);
       }
       if(feul=='diesel'){
           price = (compact*21/100)+compact
           console.log(price);
       }

   if(vehicle=='sedan'){
       if(feul=='hybrid'){
           price = (compact*9/100)+compact
           console.log(price);
       }
       if(feul=='essence'){
           price = (compact*14/100)+compact
           console.log(price);
       }
       if(feul=='diesel'){
           price = (compact*21/100)+compact
           console.log(price);
       }

   if(vehicle=='suv'){
       if(feul=='essence'){
           price = (compact*14/100)+compact
           console.log(price);
   }

   if(vehicle=='heavy'){
       if(feul=='essence'){
           price = (heavy*14/100)+heavy
           console.log(price)
       }
       if(feul=='diesel'){
           price = (heavy*21/100)+heavy
           console.log(price)
       }

       if(vehicle=='truck'){
        if(feul=='diesel'){
            price = (heavy*21/100)+heavy
            console.log(price)
        }
   }

   price = price * day ;
   console.log(price);


   
})
