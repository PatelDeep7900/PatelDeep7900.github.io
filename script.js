let addTodobutton= document.getElementById("addtodo");
let todocontainer= document.getElementById("todocontainer");
let inputfield= document.getElementById("inputfield");

addTodobutton.addEventListener('click', function(){
    var pera = document.createElement('p')
    pera.classList.add('para-styling')
    pera.innerText= inputfield.value;
    todocontainer.appendChild(pera); 
    inputfield.value=""; 
    pera.addEventListener('click',function(){
       pera.style.textDecoration="line-through"; 
    })
    pera.addEventListener('dblclick',function(){
        todocontainer.removeChild(pera);
     })
    addTodobutton.addEventListener('dblclick',function(){
        document.getElementById("todocontainer").innerHTML= "";
    })
});