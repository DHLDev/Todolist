 const STRORAGE_TODO_KEY = "TODO_KEY";
 export default {
       get(){
             return JSON.parse(localStorage.getItem(STRORAGE_TODO_KEY)) || []
       },
       set(todos){
            localStorage.setItem(STRORAGE_TODO_KEY,JSON.stringify(todos))
       }
 } 