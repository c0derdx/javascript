const inputValue = document.querySelector('.inputText');
const listContainer = document.querySelector('.list-container');
const addBtn = document.querySelector('.btn');
inputValue.value = '';

addBtn.addEventListener('click', addList);

function addList(event) {
    // event.preventDefault();
    if (inputValue.value == '') {
        alert('Please write something');
    } else {
        console.log('hello');
        const toDo = document.createElement('div');
        toDo.classList.add('list');
    
        const checker = document.createElement('button');
        checker.classList.add('checkbox');
    
        const listText = document.createElement('p');
        listText.classList.add('list-text');
    
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
    
        listContainer.appendChild(toDo);
    
        toDo.appendChild(checker);
        checker.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    
        toDo.appendChild(listText);
        listText.innerText = inputValue.value;
        inputValue.value = '';
    
        toDo.appendChild(deleteBtn);
        deleteBtn.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    
        deleteBtn.addEventListener('click' , deleteToDo);
    
        checker.addEventListener('click', checkFunction);
    }

}

function deleteToDo(e) {
    const item = e.target;

    const list = item.parentElement;
    list.classList.toggle('animation');
    list.addEventListener('transitionend', () =>{
        list.remove();
        console.log('deleteToDO');
    })
    
}

function checkFunction(e) {
    const item = e.target;
    const sibling = item.nextSibling;

    const tick = item.firstChild;
    tick.classList.toggle('checked');
    sibling.classList.toggle('cut-line');
    console.log('fuck Yeah');
}