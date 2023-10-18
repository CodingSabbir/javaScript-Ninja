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


// const input=document.querySelectorAll('input')
// input.forEach((elm)=>{
//     elm.addEventListener('keyup',(evt)=>{
//        console.log( evt.currentTarget.name)
//        console.log( evt.currentTarget.value)
//     })
// })



// const h1=document.querySelector('h1')
// h1.addEventListener('mousemove',(evt)=>{
// evt.currentTarget.style.background='pink'
// });

// const mouseOut=document.querySelector('h1')
// mouseOut.addEventListener('mouseout',(evt)=>{
// evt.currentTarget.style.background='white'
// });



// const form=document.forms[0]
// form.addEventListener('submit',(evt)=>{
//     evt.preventDefault();
//     const name=document.querySelector('#name')
//     const email=document.querySelector('#email')
//     console.log(name.value, email.value)
// })


// document.querySelector('li').addEventListener('click',(evt)=>{
//     console.log('you have clicked li')
//     console.log('li',evt.target)
//     console.log('li',evt.currentTarget)
//     // evt.stopPropagation()
// })

// document.querySelector('ul').addEventListener('click',(evt)=>{
//     console.log('you have clicked UL')
//     console.log('ul',evt.target)
//     console.log('ul',evt.currentTarget)
// })

// document.querySelector('body').addEventListener('click',(evt)=>{
//     console.log('you have clicked body')
//     console.log('body',evt.target)
//     console.log('body',evt.currentTarget)
// })



// document.querySelector('li').addEventListener('click',(evt)=>{
//     console.log('you have clicked li')
//     console.log('li',evt.target)
//     console.log('li',evt.currentTarget)
//     // evt.stopPropagation()
// },true)

// document.querySelector('ul').addEventListener('click',(evt)=>{
//     console.log('you have clicked UL')
//     console.log('ul',evt.target)
//     console.log('ul',evt.currentTarget)
// },true)

// document.querySelector('body').addEventListener('click',(evt)=>{
//     console.log('you have clicked body')
//     console.log('body',evt.target)
//     console.log('body',evt.currentTarget)
// },true)



const ulElement=document.querySelector('ul')
ulElement.addEventListener('click',(evt)=>{
if(evt.target.tagName ==='LI'){
    console.log('ul',evt.target.textContent)
}
});