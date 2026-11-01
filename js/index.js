let btn = document.getElementById("theme-toggle-button")

btn.addEventListener("click" , function(){
    document.documentElement.classList.toggle("dark")
    
})
let ankers = document.querySelectorAll(".nav-links a")
let section = document.querySelectorAll("section")
window.addEventListener("scroll" , function(){
    scrol()
})

function scrol(){

    var currentId = ""
    for(var i = 0 ; i<section.length ; i++){
        var currentSection = section[i]
        



            if(scrollY >= currentSection.offsetTop){
        currentId = currentSection.id
        
    }
    }

    for(var i = 0 ; i<ankers.length ; i++){


        if(ankers[i].getAttribute("href") === `#${currentId}`){
            ankers[i].classList.add("active")

        }
        else{
                ankers[i].classList.remove("active")

        }
    }


}











///////////////////////////////////////////////////


let btnRight = document.getElementById("prev-testimonial")
let btnLift = document.getElementById("next-testimonial")
let cardParant = document.getElementById("testimonials-carousel")
let card = document.querySelector(".testimonial-card").offsetWidth
let allCards = cardParant.children.length






carantIndex=0
btnLift.addEventListener("click" ,function(){
    carantIndex++

    if(carantIndex === allCards - 2){
        carantIndex = 0
    }


    cardParant.style.transform = `translateX(${card * carantIndex}px)`
})

btnRight.addEventListener("click" , function(){
        carantIndex--

    if(carantIndex <0){
        carantIndex = allCards - 3
    }


    cardParant.style.transform = `translateX(${card * carantIndex}px)`
})


/////////////////////////////////////////////////////////////////////


let setting = document.getElementById("settings-toggle")
let side = document.getElementById("settings-sidebar")


setting.addEventListener("click" ,function(){
    settinng()
})
function settinng(){
        side.classList.remove("translate-x-full")
    setting.style.setProperty("right" , "20rem")
}

let x = document.getElementById("close-settings")


x.addEventListener("click" , function(){
  close()
})

function close(){
          side.classList.add("translate-x-full")
    setting.style.removeProperty("right" , "20rem")
}


let font = document.querySelectorAll(".font-option")


    for(var i = 0 ; i<font.length ; i++){
        font[i].addEventListener("click" , function(e){
            fooont(e)

                       
            
        })
    }


    
    function fooont(e){
                    let push = e.target.closest(".font-option")
                let fontValue = push.dataset.font
                document.body.classList.remove(
                 "font-alexandria",
                 "font-tajawal",
                 "font-cairo");
                   document.body.classList.add( `font-${fontValue}`)


                       for(var i = 0 ; i<font.length ; i++){
                        font[i].classList.remove('active' ,'border-primary' ,'bg-slate-50' ,'dark:bg-slate-800')
                        font[i].classList.add('dark:border-slate-700' ,'border-slate-200')

                            if(font[i] === document.querySelector(`button[data-font="${fontValue}"]`)){
                                    font[i].classList.remove('dark:border-slate-700' ,'border-slate-200')
                         font[i].classList.add('active' ,'border-primary' ,'bg-slate-50' ,'dark:bg-slate-800')
                       }
                       }

                       
            
    }
// font-option w-full p-4 rounded-xl border hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden active border-primary bg-slate-50 dark:bg-slate-800
// font-option w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden



let color = document.getElementById("theme-colors-grid")

color.addEventListener("click" , function(e){
  coolor(e)
     
    
})

function coolor(e){
      let dataColor = e.target.closest("button")
    let colorSecondary = dataColor.dataset.secondary
    let colorPrimary = dataColor.dataset.primary
    document.documentElement.style.setProperty("--color-primary" , colorPrimary )
    document.documentElement.style.setProperty("--color-secondary" , colorSecondary )
    document.documentElement.style.setProperty("--color-accent" , colorSecondary )
    
     for(var i = 0 ; i<color.children.length ; i++){
     color.children[i].classList.remove('ring-2' ,'ring-primary', 'ring-offset-2' ,'ring-offset-white' ,'dark:ring-offset-slate-900')

     if(color.children[i] === dataColor){
             color.children[i].classList.add('ring-2' ,'ring-primary', 'ring-offset-2' ,'ring-offset-white' ,'dark:ring-offset-slate-900')

     }
    }
}



////////////////////// reset //

let recet = document.getElementById("reset-settings")

recet.addEventListener("click" , function(){
        side.classList.add("translate-x-full")
    setting.style.removeProperty("right" , "20rem")
    // let secondary =   color.firstChild.dataset.secondary
    // let primary =   color.firstChild.dataset.primary
    // document.documentElement.style.setProperty("--color-primary" , primary )
    // document.documentElement.style.setProperty("--color-secondary" , secondary )
    // document.documentElement.style.setProperty("--color-accent" , secondary )
    // let jj = font[0].dataset.font
    //                     document.body.classList.remove(
    //              "font-alexandria",
    //              "font-tajawal",
    //              "font-cairo");
    //   document.body.classList.add( `font-${jj}`)


    color.children[0].click()
    font[1].click()

    

})

////////////////////// nav and tabs/////////////////////////////
let parantCArd = document.getElementById("portfolio-filters")
let childCArd = document.querySelectorAll(".portfolio-item")
let childCArdd = document.querySelectorAll(".portfolio-filter")



parantCArd.addEventListener("click" , function(e){
    let cardValue = e.target.closest("button")
    

    let cardFilter = cardValue.dataset.filter
    for(let i = 0 ; i<childCArd.length ; i++){
        let valuee = childCArd[i].dataset.category

        if(valuee === cardFilter || cardFilter == "all"){
            
            childCArd[i].style.removeProperty("transition");
            childCArd[i].style.removeProperty("opacity");
            childCArd[i].style.removeProperty("transform");
            childCArd[i].style.removeProperty("display");           

            childCArd[i].style.setProperty("transition", "opacity 0.3s, transform 0.3s");
            childCArd[i].style.setProperty("opacity", "1");
            childCArd[i].style.setProperty("transform", "scale(1)");
            childCArd[i].style.setProperty("display", "block");
            
        }
        else{
            childCArd[i].style.cssText += "transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: scale(0.8); display: none;";
        }

            for(let i = 0 ; i<childCArdd.length ; i++){
                            childCArdd[i].classList.remove("hover:shadow-lg", "hover:shadow-primary/50", "active", "bg-linear-to-r", "from-primary",
                            "to-secondary", "text-white", "shadow-lg", "shadow-primary/50")
                    childCArdd[i].classList.add("border", "border-slate-300", "dark:border-slate-700"  , "dark:bg-slate-800")
                if(cardValue === childCArdd[i]){
                            childCArdd[i].classList.add("hover:shadow-lg", "hover:shadow-primary/50", "active", "bg-linear-to-r", "from-primary",
                            "to-secondary", "text-white", "shadow-lg", "shadow-primary/50")
                    childCArdd[i].classList.remove("border", "border-slate-300", "dark:border-slate-700" , "dark:bg-slate-800")
                }
            }





        
 
    }
    
})
