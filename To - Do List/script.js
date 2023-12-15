const parent = document.getElementById("lower");
const submit = document.querySelector("#submit");
const list = [];




const addDiv = (item) => {
    const div = document.createElement('div');
    div.innerHTML = `${item}`
    div.className = "element"
    list.push(div) 

    const inner = document.createElement('div')
    inner.className = "del"
    inner.innerHTML = `<i class="fa-solid fa-trash"></i>`

    
    div.appendChild(inner)

    parent.appendChild(div)

    inner.addEventListener("click" , function () {
         this.parentElement.remove()
    })

    
}


const getItem = () => {
    const item = document.getElementById('input').value
    addDiv(item)
    document.getElementById('input').value = '';
}

submit.addEventListener("click" , getItem );

if(list.length != 0){
    const del = document.querySelector('.del')
    del.addEventListener("click" , () => {
        console.log("Del")
    })
}








//lower[0].appendChild(div)






