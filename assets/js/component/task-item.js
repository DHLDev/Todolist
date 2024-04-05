import html from "../core.js";

function TaskItem({ todo}){
      return html `
      <li class="task-item">
            <div class="task-view">
                  <div class="view">
                        <input type="checkbox" class="task-item-check-box" ${todo.status && 'checked'}>
                        <span class="task-view-item">${todo.title}</span>
                  </div>
                  <div class="action">
                        <button type="submit" class=" btn btn-edit "><i class="fas fa-pen"></i></button>
                        <button type="submit" class=" btn btn-download"><i class="fas fa-download"></i></button>
                        <button type="submit" class=" btn btn-delete"><i class="fas fa-trash"></i></button>
                  </div>
            </div>
            <div class="task-edit">
                  <input type="text" class="task-edit-input" value="${todo.title}">
                  <div class="action">
                        <button type="submit" class="btn btn-save">Save</button>
                        <button type="submit" class="btn btn-cancel">Cancel</button>
                  </div>      
            </div>
      </li>
      `
}
export default TaskItem