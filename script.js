const btnAdd = document.querySelector('.btn-add');
// modal add
const addModal = document.querySelector('.add-modal');

const tableUsers = document.querySelector('.table-users');

//Create element and render users
const renderUser = doc => {
    const tr = `
       <tr>
           <td>${doc.data().firstName}</td>
           <td>${doc.data().lastName}</td>
           <td>${doc.data().phone}</td>
           <td>${doc.data().email}</td>
           <td>
               <button class="btn btn-edit">Edit</button>
               <button class="btn btn-delete">Delete</button>
           </td>
       </tr>`
       tableUsers.insertAdjacentHTML('beforeend',tr);
}


// click add user button
btnAdd.addEventListener('click', () => {
    addModal.classList.add("modal-show")
})

// User click anywhere out
window.addEventListener('click', e => {
    console.log(e.target)
    if (e.target == addModal) {
        addModal.classList.remove('modal-show');
    }
})

// get all users
db.collection("users").get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        console.log(doc.data());
        renderUser(doc);
    });

})