let app = new Vue({
  el: '#app',
  data: {
      todoList: [],
      todoInput: '',
  },
  methods: {
      addTodo: function() {
          if (this.todoInput === '') {
              return;
          }
          
          let newItem = { 
              isDone: false,
              text: this.todoInput
          };
          this.todoList.push(newItem);
          this.todoInput = '';
      },

      removeTodo: function(index) {
          this.todoList.splice(index, 1);
      },

      markTodo: function(index) {
          let item = this.todoList[index];
          item.isDone = !item.isDone;
      },

      onEnterClick: function(event) {
          if (event.keyCode === 13) { // 13 - Enter
              this.addTodo();
          }
      }
  }
})







function addElement() {
    let toDoInput = document.getElementById ('to-do-input');
    let toDoList = document.getElementById ('to-do-list');
    let newItem = document.createElement ('li');
    let span = document.createElement ('span');
    let deleteButton = document.createElement ('button');
    deleteButton.setAttribute('onclick', 'removeItem');
    span.innerHTML = toDoInput.value;
    deleteButton.innerHTML = 'x';
    newItem.appendChild(span);
    newItem.appendChild(deleteButton);
    toDoList.appendChild (newItem);
    toDoInput.value = ' ';
 }
 
 function removeItem() {
     
 }