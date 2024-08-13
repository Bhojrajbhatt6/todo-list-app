const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = function(){
    if (inputBox.value === ''){
        alert('Please enter Your task!');

    }else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // add the delete icon
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
// Click function
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Saveing the content

const saveData = function(){
    localStorage.setItem("data",listContainer.innerHTML );
}
const showTask = function(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();


