import html from "../core.js";
import { connect } from '../store.js';


const connecter = connect()
function TaskAdd({todos}){
      let persent = 0 + '%';
      if(todos.length > 0){
            persent = ((todos.filter(todo => todo.status).length / todos.length) * 100 ) + '%';
      }
      return html `
            <div class="col l-5 task-add">
                  <p class="task-label">Todos</p>
                  <div class="task-todo-input">
                        <input type="text" name="" id="" placeholder="Nhập việc cần làm" class="task-todo-input-item">
                        <button type="submit" class="btn btn-addTodo" onclick="dispatch('AddTodo',document.querySelector('.task-todo-input-item').value.trim())">add</button>
                  </div>
                  <p class="task-compelete-title">Task Compelete</p>
                  <div class="task-compelete-process">
                        <div class="task-compelete-persent" style="width:${persent}"></div>
                        <span class="task-compelete-persent-number">${persent}</span>
                  </div>
            </div>
      `
}
export default connecter(TaskAdd)