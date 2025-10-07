
document.getElementById('addTodo').addEventListener('click', function(e){
    e.preventDefault();
    if(document.querySelector('.todoText').value.length == 0){
        alert('add Something in the input box');
    }
    else{
        createTodo( document.querySelector('.todoText').value);

//     //         <!--my todo will list here-->
//     // <!--<div class="task">
//     //     <span id="taskname">Sample To-Do</span><button class="delete">Del</button>
//     // </div> -->
     
//     const todoContainer = document.getElementsByClassName('todo-list')[0];  //getElementsByClassName returns an HTMLCollection (like an array, not a single element).  You can’t call .append() directly on it.

//     let taskContainer= document.createElement('div');
//     taskContainer.setAttribute('class', 'task');

//     let valueEle = document.createElement('span');
//     valueEle.setAttribute('id', 'taskname');
//     let buttonEle = document.createElement('button');
//     buttonEle.setAttribute('class', 'delete');
//     valueEle.innerText= document.querySelector('.todoText').value;
//     buttonEle.innerHTML= 'Del';
// //   complete button adding
// const completeButtonEle = document.createElement('button');
// completeButtonEle.setAttribute('class', 'complete');
// completeButtonEle.innerHTML = 'DONE';
// // console.log(valueEle,buttonEle);
//     taskContainer.append(valueEle, buttonEle, completeButtonEle);
//     //console.log(valueEle,buttonEle);
//     //taskContainer.append(buttonEle);

//     todoContainer.append(taskContainer);
//     document.querySelector('.todoText').value='';
//      var currTask = document.querySelectorAll('.delete');  // this is giving me array of all the delete button
// //console.log(currTask);

// for(let todoDel of currTask){
//     todoDel.onclick= function(){
//         this.parentNode.remove();
//     }
// }
// // here i will create a function to create a done style 
// var complete_task = document.querySelectorAll('.complete');   // this is giving me array of all 'DONE' button
// for(let comp of complete_task){
//     comp.onclick= function(){
//         this.parentNode.style.background='#483D8B';
//     }
// }

//     }

//    document.querySelector('.runtime-todo').innerText="";
}})

function createTodo(inputText){
    //         <!--my todo will list here-->
    // <!--<div class="task">
    //     <span id="taskname">Sample To-Do</span><button class="delete">Del</button>
    // </div> -->
     
    const todoContainer = document.getElementsByClassName('todo-list')[0];  //getElementsByClassName returns an HTMLCollection (like an array, not a single element).  You can’t call .append() directly on it.

    let taskContainer= document.createElement('div');
    taskContainer.setAttribute('class', 'task');

    let valueEle = document.createElement('span');
    valueEle.setAttribute('id', 'taskname');
    let buttonEle = document.createElement('button');
    buttonEle.setAttribute('class', 'delete');
    valueEle.innerText=inputText;
    buttonEle.innerHTML= 'Del';
//   complete button adding
const completeButtonEle = document.createElement('button');
completeButtonEle.setAttribute('class', 'complete');
completeButtonEle.innerHTML = 'DONE';
// console.log(valueEle,buttonEle);
    taskContainer.append(valueEle, buttonEle, completeButtonEle);
    //console.log(valueEle,buttonEle);
    //taskContainer.append(buttonEle);

    todoContainer.append(taskContainer);
    document.querySelector('.todoText').value='';
     var currTask = document.querySelectorAll('.delete');  // this is giving me array of all the delete button
//console.log(currTask);

for(let todoDel of currTask){
    todoDel.onclick= function(){
        this.parentNode.remove();
    }
}
// here i will create a function to create a done style 
var complete_task = document.querySelectorAll('.complete');   // this is giving me array of all 'DONE' button
for(let comp of complete_task){
    comp.onclick= function(){
        this.parentNode.style.background='#483D8B';
    }
}
document.querySelector('.runtime-todo').innerText="";


    }

   

function clearAllTodos(){

    // running a loop to delete all the added todos
    document.querySelectorAll('.task').forEach(function(ele){
        document.getElementById('tasking').removeChild(ele);
    })
}

    //document.getElementById('task').removeChild(document.querySelectorAll('.task'));



//HTML Ref . EventName = EventHandler
 // it delets all the todo
document.querySelector('#deleteTodo').onclick=clearAllTodos;     // this is calling the function clearAllTodos

// if anyone is typing inside the input box this will replicate all the things and after the click it simply vanishes
document.querySelector('.todoText').onkeyup= function(){
    document.querySelector('.runtime-todo').innerText= 'You Typed:' + this.value;   // here this is representing to .todoText

}

// it generate the 5 todos
document.getElementById('generateTodo').onclick= function(e){
    e.preventDefault();

    //if i dont want to add more todos from this button again in the webpage

    document.getElementById('tasking').innerHTML="";
    for(let i=1; i<=5; i++){
        createTodo('These things to-do: '+ i);
    }
}

// it generates the todo after the delay of 5 seconds

document.getElementById('delay').onclick= function(e){
    e.preventDefault();
    setTimeout(()=>{
        for(let i=1;i<=5;i++){
            createTodo('5 sec delayed: '+i);
        }
    },5000)
}

// it generates todo with the help of api from server

const apiAddress = 'https://jsonplaceholder.typicode.com/posts';

document.getElementById('api').onclick= function(e){
    e.preventDefault();
    fetch(apiAddress).then(response=>{    // this is the data coming from server
        response.json().then(data=>{     // here data converts into object with the json()
           // console.log(data.length);   to check the length of data coming from api 
           for(let work of data.splice(0,5)){
            createTodo(  work.title);
           }
        })
        }).catch(fail=>{
            alert('Api is not working Baby!');
    })
}