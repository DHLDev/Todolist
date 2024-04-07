import html from "../core.js";
import { connect } from "../store.js";

const connecter = connect()

function TaskItem({ todo ,index, EditIndex}){
      return html `
      <li class="task-item
            ${EditIndex === index && 'edit'}">
            <div class="task-view">
                  <div class="view">
                        <input type="checkbox" class="task-item-check-box checkbox" ${todo.status && 'checked'} onchange="dispatch('Toggle',${index})">
                        <span class="task-view-item">${todo.title}</span>
                  </div>
                  <div class="action">
                        <button type="submit" class=" btn btn-edit" onclick="dispatch('StartEdit',${index})"><i class="fas fa-pen"></i></button>
                        <button type="submit" class=" btn btn-download"><i class="fas fa-download" onclick="dispatch('Download',${index})"></i></button>
                        <button type="submit" class=" btn btn-delete" onclick="dispatch('Remove',${index})"><i class="fas fa-trash"></i></button>
                  </div>
            </div>
            <div class="task-edit">
                  <input type="text" class="task-edit-input" value="${todo.title}">
                  <div class="action">
                        <button type="submit" class="btn btn-save" onclick="dispatch('EditEnd',document.querySelector('.task-edit-input').value.trim())">Save</button>
                        <button type="submit" class="btn btn-cancel"onclick="dispatch('Cancel')">Cancel</button>
                  </div>      
            </div>
      </li>
      `
}
export default connecter(TaskItem)