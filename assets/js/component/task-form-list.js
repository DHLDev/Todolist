import html from "../core.js";
import TaskItem from "./task-item.js";
import { connect } from "../store.js";

const connecter = connect()
function TaskFormList({ todos,filter,filters }){
      return html `
      <div class="col l-7 task-form-list">
            <div class="check-all">
                        <div class="check-all-wrap">
                        <input type="checkbox" class="checkbox-all-box checkbox" 
                        ${todos.every(todo => todo.status) && 'checked'}
                        onchange="dispatch('ToggleAll',this.checked)">
                        <span class="check-all-title">All complete</span>
                  </div>
                  ${todos.filter(filters.completed).length > 0 && html `
                  <div class="clear-todo" onclick = "dispatch('ClearCompleted')">Clear todo complete</div>
                  `}
            </div>
            <ul class="task-list">
                  ${todos
                        .filter(filters[filter])
                        .map((todo,index) => TaskItem({ todo,index }))}      
            </ul>
            <div class="selected-option">
                  <div class="select-wrap">
                  ${Object.keys(filters).map(type => html `
                        <span class="select-item ${filter === type && 'check-filter'}" onclick = "dispatch('ChangeFilter','${type}')">
                        ${type[0].toUpperCase() + type.slice(1)}
                        </span>
                  `)}      
                  </div>
            </div>
      </div>
      `
}

export default connecter(TaskFormList)