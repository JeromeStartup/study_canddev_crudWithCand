const btnAdd=document.querySelector('.btn-add');
// modal add
const addModal=document.querySelector('.add-modal');
// click add user button
btnAdd.addEventListener('click',()=>{
    addModal.classList.add("modal-show")
})

// User click anywhere out
window.addEventListener('click',e=>{
    console.log(e.target)
    if(e.target == addModal){
        addModal.classList.remove('modal-show');
    }
})