import html from "../core.js";

export default function TaskAdd(){
      return html `
            <div class="col l-5 task-add">
                  <p class="task-label">Todos</p>
                  <div class="task-todo-input">
                        <input type="text" name="" id="" placeholder="Nhập việc cần làm" class="task-todo-input-item">
                        <button type="submit" class="btn btn-addTodo" onclick="dispatch('AddTodo',document.querySelector('.task-todo-input-item').value)">add</button>
                  </div>
                  <p class="task-compelete-title">Task Compelete</p>
                  <div class="task-compelete-process">
                        <div class="task-compelete-persent"></div>
                        <span class="task-compelete-persent-number">0%</span>
                  </div>
            </div>
      `
}