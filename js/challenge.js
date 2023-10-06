const counter = document.getElementById('counter')
const minusButton = document.getElementById('minus')
const addButton = document.getElementById('plus')
const likeButton = document.getElementById('heart')
const pause = document.getElementById('pause')
const likeList = document.querySelector('ul.likes')
const form = document.getElementById('comment-form')
const commentInput = document.getElementById('comment-input')
const commentBox = document.getElementById('list')

let initialCount = 0
let interval

document.addEventListener('DOMContentLoaded', ()=>{
    startTimer()
    updateCount()
   

    addButton.addEventListener('click', addCount)
    minusButton.addEventListener('click', subtractCount)
    pause.addEventListener('click', pauseButton)
    likeButton.addEventListener('click', like)

    form.addEventListener('submit', (e)=>{
        e.preventDefault()

        const newList = document.createElement('li')
        newList.textContent = commentInput.value 

        commentBox.appendChild(newList)

    })
   



})

function updateCount(){
    initialCount++
    return counter.textContent = initialCount
}
function startTimer(){
    interval = setInterval(() => {
        updateCount()
    }, 1000);
}
function addCount(){
    return initialCount++
}

function subtractCount(){
    return initialCount--
}

function pauseButton(){
   if(interval){
    clearInterval(interval)
    interval = null
    addButton.disabled = true
    minusButton.disabled = true
    likeButton.disabled = true
    pause.textContent = 'resume'
   }
   else{
    startTimer()
    addButton.disabled = false
    minusButton.disabled = false
    likeButton.disabled = false
    pause.textContent = 'Pause'
   }
}

function like(){
    const newList = document.createElement('li')
    newList.textContent = `I liked ${initialCount}`

    return likeList.appendChild(newList)

    
}