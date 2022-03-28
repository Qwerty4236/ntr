var i=0
var t=document.getElementById("html")
var g=document.getElementById("pl")
var h=21


function sleep(ms){
    return new Promise (resolve => setTimeout (resolve,ms));
}


async function fr(){
    while (true){
        i++
        h--
        g.innerHTML=h
        
        console.log(i)
        
        await sleep(1000)
        
        if(i==20){
            h=11
            t.style.backgroundColor="#00FF0E"
            
        }

    else if(i==30){
        h=4
        t.style.backgroundColor="orange"

    }
    else if(i>=33){
        t.style.backgroundColor="red"
        i=0
        h=21
    }


        
    }
    
}
fr()