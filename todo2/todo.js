const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");


//state
let todos = [];
let todoId = "";

todoForm.addEventListener('submit', (event) => {
   event.preventDefault();
   const todo = {
      id: Date.now(),
      name: todoInput.value,
      completed: false
   }
   todos.push(todo);
   displayTodos();
   todoForm.reset()
})

function displayTodos() {
   todoList.innerHTML = '';
   todos.forEach((todo) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
      const div = document.createElement("div");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.classList.add('form-check-input', 'me-2');
      checkbox.addEventListener('change', (event) => {
         event.preventDefault();
         todo.completed = event.target.checked;
         displayTodos();
      })
      //name of todo
      const span = document.createElement('span');
      span.innerText = todo.name;
      span.classList.add('ms-2');
      span.style.textDecoration = todo.completed ? 'line-through' : 'none';

      div.append(checkbox)
      div.append(span);

      li.append(div);


      const rightDiv = document.createElement('div');
      //Edit button
      const editButton = document.createElement('button');
      editButton.classList.add('btn', 'btn-secondary', 'btn-sm');
      editButton.innerText = "Edit";
      editButton.setAttribute("data-bs-toggle", "modal");
      editButton.setAttribute("data-bs-target", "#editModal");
      editButton.addEventListener('click', (event) => {
         event.preventDefault();
         document.getElementById('todo-edit').value = todo.name;
         document.getElementById('todo-id').value = todo.id;

         todoId = todo.id;
         localStorage.setItem("todoId", todo.id)
         sessionStorage.setItem("todoId", todo.id)

        
       
      })

      rightDiv.append(editButton);
      //Delete button
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ms-2');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', (event) => {
         event.preventDefault();
         todos = todos.filter((value) => {
            return value.id !== todo.id;
         })
         displayTodos();
      })

      rightDiv.append(deleteButton);

      li.append(rightDiv);

      todoList.append(li);
   })
}

const editHandler = (event) => {
   event.preventDefault();
   todos = todos.map((value) => {
      return value.id === Number(todoId) ? {
         id: Number(todoId),
         name: document.getElementById("todo-edit").value,
         completed: false
      } : value;
   })
   displayTodos();
   document.getElementById('btn-close').click();
}