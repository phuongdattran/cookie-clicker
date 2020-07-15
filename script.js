let click =  document.getElementById("click") ;        
let label =  document.getElementById("label") ;     
let labelContent = label.innerHTML; 
let multi =  document.getElementById("multi") ;    
let multiOn = false ;
let multiplier = 2;
let counterMulti = 0;
let cost = 1;
cost = cost*counterMulti;
document.getElementById("cost").innerHTML = multiplier*counterMulti;

click.addEventListener("click", increment);
multi.addEventListener("click", ()=>{

    if (parseInt(label.innerHTML)>=multiplier*counterMulti){
        document.getElementById("cost").innerHTML = multiplier*(counterMulti+1);
        multiOn=true;
        counterMulti++;
        label.innerHTML = parseInt(label.innerHTML)-multiplier*counterMulti;
        multi.innerHTML = "Multiplier: X" + multiplier*counterMulti;
    }
})





function increment ( )  { 
    if (multiOn == false)
        {label.innerHTML= parseInt(label.innerHTML)+1;}
    else {label.innerHTML = parseInt(label.innerHTML)+multiplier*counterMulti;};
} 



/*let 
let susbract = labelContent-cost; */



/* susbract = on enlève le cout au label 
je dois définir le cout dans une variable */
