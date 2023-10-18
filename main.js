const liElm_1=document.querySelector('.item-1')
const liElm_2=document.querySelector('.item-2')
liElm_1.remove()

const ul=document.querySelector('ul')
const liElement=document.createElement('li')
liElement.classList.add('item-5')
liElement.textContent='Blog'
ul.appendChild(liElement)


liElm_2.addEventListener('click',(e)=>{
e.currentTarget.style.color='red'
})
console.log(liElm_2)


// const input=document.querySelectorAll('input')
// input.forEach((elm)=>{
//     elm.addEventListener('click',(evt)=>{
//        console.log( evt.currentTarget.name)
//     })
// })


const input=document.querySelectorAll('input')
input.forEach((elm)=>{
    elm.addEventListener('keyup',(evt)=>{
       console.log( evt.currentTarget.name)
       console.log( evt.currentTarget.value)
    })
})

const h1=document.querySelector('h1')
h1.addEventListener('mousemove',(evt)=>{
evt.currentTarget.style.background='pink'
});

const mouseOut=document.querySelector('h1')
mouseOut.addEventListener('mouseout',(evt)=>{
evt.currentTarget.style.background='white'
});
