import html from "../core.js";
import TaskItem from "./task-item.js";
import { connect } from "../store.js";

const connecter = connect()
function TaskFormList({ todos }){
      return html `
      <div class="col l-7 task-form-list">
            <ul class="task-list">
                  ${todos.map(todo => TaskItem({ todo }))}      
            </ul>
      </div>
      `
}

export default connecter(TaskFormList)