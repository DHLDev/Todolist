import strorage from "./until/strorage.js"
const listInit = {
      todos:strorage.get(),
      filter: 'all',
      filters:{
            all:() => true,
            active:todo => !todo.status,
            completed:todo => todo.status
      }
}

const actions = {
      AddTodo({todos},title){
            if(title != '' ){
                  todos.push({title,status:false})
                  strorage.set(todos)
            }
      },
      Toggle({todos},index){
            todos[index].status = !todos[index].status
            strorage.set(todos)
      },
      ToggleAll({todos},status){
            todos.forEach(todos => todos.status = status)
            strorage.set(todos)
      },
      Remove({todos},index){
            todos.splice(index,1)
            strorage.set(todos)
      },
      ChangeFilter(state,filter){
            state.filter = filter
      },
      
      ClearCompleted(state){
            state.todos = state.todos.filter(state.filters.active)
            strorage.set(state.todos)
      },
      StartEdit(state,index){
            state.EditIndex = index
      },
      EditEnd(state,title){
            if(state.EditIndex !== null){
                  if(title){
                        state.todos[state.EditIndex].title = title
                        strorage.set(state.todos)
                  }else{
                        state.todos.splice(state.EditIndex,1)
                        strorage.set(state.todos)
                  }
            }
            state.EditIndex = null
      },
      Cancel(state){
            state.EditIndex = null
      },
      Download({todos}, index) {
            const downloadNode = document.createElement('a')
            const value = todos[index].title
            downloadNode.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(value)
            downloadNode.setAttribute('download', `todo.txt`)
            document.body.appendChild(downloadNode)
            downloadNode.click()
            document.body.removeChild(downloadNode)
        },
}
export default function reducer(state = listInit,action,...args){
            actions[action] && actions[action](state,...args)
            return state;
}