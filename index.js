let body = document.body

// PARTIE I: Boucles et DOM

//I-1

// let ul1 = document.getElementById('ul1')
// let li = document.querySelectorAll(".li")
// for(let i=0; i< li.length; i++){
    
//     li[i].innerText = i

    // I-4

    // if(i%2 == 0){
    //     ul1.removeChild(li[i])
    // }
// }

//I-2

// for(let i=0; i<=9; i++){
//     let p = document.createElement('p')
//     ul1.appendChild(p)
//     p.innerText = 'Paragraphe-' + i
// }

//I-3

// let td = document.querySelectorAll('td')
// for(let i=0; i<td.length; i++){
//     td[i].style.background =  '#'+(Math.random()*0xFFFFFF<<0).toString(16)
// }

//I-5

// const tab = ["Pomme", "Banane", "Orange"]
// let ul2 = document.createElement('ul')
// body.appendChild(ul2)
// for(let i = 0; i<tab.length ; i++){
//     let li = document.createElement('li')
//     ul2.appendChild(li)
//     li.innerText = tab[i]
// }

//PARTIE II: Relations Parents/Enfants


// II-1

// for(let i=0; i<5; i++){
//     let div = document.createElement('div')
//     body.appendChild(div)
//     let p = document.createElement('p')
//     div.appendChild(p)
//     p.innerText = 'Enfant ajouté'
// }


//II-2

// let ul1 = document.getElementById('ul1')
// let li = document.querySelectorAll(".li")
// for(i=0; i<li.length; i++){
//     ul1.removeChild(li[i])
// }


//II-3

// let section = document.createElement('section')
// body.appendChild(section)
// let div1 = document.createElement('div')
// section.appendChild(div1)
// let div2 = document.createElement('div')
// div1.appendChild(div2)
// let span = document.createElement('span')
// div2.appendChild(span)
// let parentSpan = span.parentElement
// console.log(parentSpan)
// while(parentSpan !== body ){
//     parentSpan = parentSpan.parentElement
//     console.log(parentSpan)
// }


// II-4
// const section2 = document.createElement('section'); section2.id = 'section2'
// div2.replaceWith(section2)
// console.log(section)


//II-5

// let div = document.createElement('div'); body.appendChild(div)
// let ul = document.createElement('ul'); div.appendChild(ul)
// for(i=onabort; i<4; i++){
//     let li = document.createElement('li')
//     ul.appendChild(li)
// }


//PARTIE III: Relations Siblings(Freres & Soeurs)


//III-1

// let uliste = document.getElementById('uliste')
// let li2 = document.getElementById('li2')
// let petitFr = li2.previousElementSibling
// let grandFr = li2.nextElementSibling
// petitFr.style.background = 'blue'
// grandFr.style.background = 'red'


//III-2

// let li3 = document.getElementById('li3')
// let premier = li3.parentElement.firstElementChild
// let dernier = li3.parentElement.lastElementChild
// console.log(premier, dernier)


//III-3

// let uliste = document.getElementById('uliste')
// let li2 = document.getElementById('li2')
// let suivant = li2.nextElementSibling
// li2.before(suivant)
// console.log(uliste)


//III-4

// let uliste = document.getElementById('uliste')
// let p1 = document.getElementById('p1')
// let suivant = p1.nextElementSibling
// uliste.removeChild(suivant)


//III-5

// let uliste = document.getElementById('uliste')
// let p1 = document.getElementById('p1')
// let p1copy = p1.cloneNode(true)
// console.log(p1copy)
// p1.after(p1copy)


//PARTIE IV: Tableaux et DOM


//IV-1

// const tab = [['nom', 'age'], ['Alice', 25], ['Bob', 30]]

// let table = document.createElement('table')
// body.appendChild(table)
// for(let i=0; i<=2; i++){
//     let tr = document.createElement('tr'); table.appendChild(tr)
//     if(i==0){
//         let th1 = document.createElement('th'); tr.appendChild(th1)
//         th1.innerText = tab[i][0]
//         let th2 = document.createElement('th'); tr.appendChild(th2) 
//         th2.innerText = tab[i][1]
//     } else{
//         let td1 = document.createElement('td'); tr.appendChild(td1)
//         td1.innerText = tab[i][0]
//         let td2 = document.createElement('td'); tr.appendChild(td2) 
//         td2.innerText = tab[i][1]
//     }
// }


//IV-2

// let tr = document.createElement('tr'); table.appendChild(tr)
// tr.innerHTML = '<td>Jean</td> <td>28</td>'


//IV-3


// const abc = ['A', 'B', 'C']
// let ul = document.createElement('ul'); body.appendChild(ul)
// for(let i=0; i < abc.length; i++){
//     let li = document.createElement('li')
//     ul.appendChild(li)
//     li.innerText = abc[i]

//     if(i==1){
//         li.style.fontWeight = 'bold'
//     }
// }


//Iv-4

// const tab1 = ['rouge', 'vert']
// const tab2 = ['bleu', 'jaune']
// const tab3 = [].concat(tab1, tab2)
// let ul = document.createElement('ul'); body.appendChild(ul)
// for(let i=0; i < tab3.length; i++){
//     let li = document.createElement('li')
//     ul.appendChild(li)
//     li.innerText = tab3[i]
// }  

//IV-5

// const Tab = [
//     {
//         nom: 'Alice',
//         age : 25
//     },
//     {
//         nom: 'Bob',
//         age: 30
//     }
// ]
// let ul = document.createElement('ul'); body.appendChild(ul)
// for(let i=0; i < Tab.length; i++){
//     let li = document.createElement('li')
//     ul.appendChild(li)
//     li.innerText = Tab[i].nom + ' (' + Tab[i].age + 'ans)' 
// }
