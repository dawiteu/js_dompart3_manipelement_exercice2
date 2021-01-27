//1 

const h1 = document.querySelector('h1'); 

h1.innerText="Les attributs class et id"; 


//2 
const h2 = document.querySelectorAll('h2');

h2[0].innerText = "Exo 2 part A "; 
// 3
h2[1].innerHTML = "Exo 2 part B ";

// 4 

const p = document.querySelectorAll('p'); 

p[0].innerHTML= "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> ";

// 5 
p[1].innerHTML= "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";


// =====2 ======

// 6 
h1.setAttribute('id','bigTitle'); 

// 7 

const div = document.querySelectorAll('div');

div[0].classList.add('container');

// 8 

Array.from(h2).forEach( (e) =>{
    e.classList.add('title');
})


//9 

Array.from(p).forEach(e => {
    e.classList.add('text');
});


// ======= 2.2 ============ 

//10 

const section = document.querySelectorAll('section'); 

section[0].classList.add('margin-bottom', 'border-black', 'padding');

// 11
section[1].classList.add('margin-top', 'border-black', 'padding');

// 12 

const divinsec = document.querySelectorAll('div'); 

Array.from(section).forEach( (e) => {
    const divinsec = e.querySelectorAll('div'); 
    if(divinsec && divinsec.length > 0){
        Array.from(divinsec).forEach((elem) =>{
            console.log(elem);
            //elem.style.backgroundColor="blue";
            elem.style.cssText="width:20px; height:20px; background-color:blue; border:25px dashed grey;";
        })
    }
});








