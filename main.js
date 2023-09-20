const form = document.querySelector('.form'),
input = document.querySelector('.entered-text'),
btnAdd = document.querySelector('.btn1'),
btnEdit = document.querySelector('.pencil'),
task = document.querySelector('.tasks'),
btnDelete = document.querySelector('.xmark');

input.addEventListener('.submit', (e) => {
    console.log('ok');
    e.preventDefault()
})

btnAdd.addEventListener('.click', (e) =>{
    e.preventDefault()
    console.log('ok');
    if (input.value.trim() != 0) {
        const newItem = document.createElement("div");
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <button class="btn">
            <img class="pencil" src="./svg/pencil-solid.svg" alt="svg">
        </button>
        <button class="btn">
            <img class="xmark" src="./svg/xmark-solid.svg" alt="svg">
        </button>  
        `
        task.appendChild(newItem);
        input.value = ''
        console.log('ok');
    } else {
        alert('Please enter some text')
    }
    
})