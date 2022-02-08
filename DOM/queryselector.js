// const heading = document.querySelector('h1')
// heading.innerText = 'hello QuerySelector'
// console.log(heading)

// const allselector = document.querySelectorAll('ul li') 
// console.log(allselector)


const incrementbtn = document.querySelector('#increment')
const decrementbtn = document.querySelector('#decrement')
let counter = 0;

function incrementcount() {
    const counterEl = document.getElementById('counter')
    counter++
    counterEl.innerText = counter
}

function decrementcount() {
    const counterEl = document.getElementById('counter')
    counter--
    counterEl.innerText = counter
}

incrementbtn.addEventListener('click',incrementcount)
decrementbtn.addEventListener('click',decrementcount)
