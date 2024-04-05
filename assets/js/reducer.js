const listInit = {
      todos:[
            {
                  title:"Learn Java",
                  status:true
            },
            {
                  title:"Learn C++",
                  status:false
            },
            {
                  title:"Learn C#",
                  status:false
            },
            {
                  title:"Learn Python",
                  status:false
            },
            {
                  title:"Learn JavaScript",
                  status:true
            }
      ]
}

export default function reducer(state = listInit,actions,...args){
      switch(actions){
            case 'AddTodo':
                  const [title] = args;
                  return {
                        ...state,
                        todos:[...state.todos,{
                              title,
                              status: false
                        }]
                  }
            default:
                  return state;
      }
}