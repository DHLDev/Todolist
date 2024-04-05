import html from "../core.js";
import TaskAdd from "./task-add.js";
import TaskFormList from "./task-form-list.js";
function App(){
      return html `
            <div class="todo-app">
                  <div class="grid wide row wrap">
                        ${TaskAdd()}
                        ${TaskFormList()}
                  </div>     
            </div>
      `
}

export default App