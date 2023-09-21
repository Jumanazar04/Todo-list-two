const form = document.querySelector('.form'),
input = document.querySelector('.entered-text'),
btnAdd = document.querySelector('.btn1'),
btnEdit = document.querySelector('.pencil1'),
task = document.querySelector('.tasks'),
text = document.querySelector('.texte'),
btnDelete = document.querySelector('.xmark1');

btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('ok');
    if (input.value != 0) {
                const newItem = document.createElement("div");
                newItem.classList.add('item');
                newItem.innerHTML = `
                <p class="texte">${input.value}</p>
                <div>
                    <button class="btn pencil1">
                        <img class="pencil" src="./svg/pencil-solid.svg" alt="svg">
                    </button>
                    <button class="btn xmark1">
                        <img class="xmark" src="./svg/xmark-solid.svg" alt="svg">
                    </button>  
                </div>
                
                `
                task.appendChild(newItem);
                input.value = ''
       } else {
        alert('Please enter some text')
     }
})

task.addEventListener('click', (e) => {
    if(e.target.classList.contains('xmark')){
        e.target.parentElement.parentElement.parentElement.remove();
    }
    if(e.target.classList.contains('pencil')){
        e.target.parentElement.parentElement.parentElement.classList.add('completed')
    }
})
















// input.addEventListener('.submit', (e) => {
//     console.log('ok');
//     e.preventDefault()
// })

// btnAdd.addEventListener('.click', (e) =>{
//     e.preventDefault()
//     console.log('ok');
//     if (input.value.trim() != 0) {
//         const newItem = document.createElement("div");
//         newItem.classList.add('item');
//         newItem.innerHTML = `
//         <p>${input.value}</p>
//         <button class="btn">
//             <img class="pencil" src="./svg/pencil-solid.svg" alt="svg">
//         </button>
//         <button class="btn">
//             <img class="xmark" src="./svg/xmark-solid.svg" alt="svg">
//         </button>  
//         `
//         task.appendChild(newItem);
//         input.value = ''
//         console.log('ok');
//     } else {
//         alert('Please enter some text')
//     }
    
// })